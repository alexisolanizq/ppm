import { useAreaActiveListService } from '@Services/areas/useAreaService'
import { useSaveCoresponsibleByUser } from '@Services/coresponsible/useCoresponsibleService'
import { useAddAreaUserByAxiosService, useSaveAreaSecondaryByUser, useUpdateAreaServiceByAxios } from '@Services/jobAreaUser/useJobAreaUserService'
import { useLevelListService } from '@Services/level/useLevelService'
import { useUserAddService, useUserListActiveExceptUserIdService, useUserUpdateService } from '@Services/user/useUserService'
import { getJobAreaMain, getJobAreasSecondary } from '@Utils/user'
import { isValid } from '@Utils/values'
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useParams } from 'react-router'

const DEFAULT_VALUES = {
  areaSecondary: [
    { joauMainArea: false }
  ]
}

const useUserForm = ({ row = null, isUpdate, onEnd }) => {
  const { empId } = useParams()
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  })
  const { fields: areasSecondary, append: addSecondary, replace } = useFieldArray({
    control,
    name: 'areaSecondary'
  });

  useEffect(() => {
    if (isValid(row)) {
      const { jobAreaUsers } = row;
      const jobAreaMain = getJobAreaMain(jobAreaUsers);
      if (jobAreaMain) {
        const {
          jobArea: { joaId }
        } = jobAreaMain;
        setValue('joaIdMain', joaId);
      }
      const jobAreasSecondary = getJobAreasSecondary(jobAreaUsers)
      if (jobAreasSecondary.length === 0) {
        replace({ joauMainArea: false })
      } else {
        replace(jobAreasSecondary)
      }
    }
  }, [row]);

  // apis
  const { data: levels, isLoading: isLoadingLevels } = useLevelListService();
  const { data: areas, isLoading: isLoadingAreas } = useAreaActiveListService();
  const { data: users, isLoading: isLoadingUsers } = useUserListActiveExceptUserIdService();
  const mutationAdd = useUserAddService()
  const mutationUpdate = useUserUpdateService(row?.usrId);
  const mutationCoresponislbe = useSaveCoresponsibleByUser();
  const mutationSecondaryAreas = useSaveAreaSecondaryByUser()

  const onSubmit = async ({
    areaSecondary,
    joaIdMain,
    coresponsibles,
    level,
    usrEmail,
    usrName
  }) => {
    let response = null
    if (isUpdate) {
      const body = {
        ...row,
        level: {
          levId: level.levId
        }
      }
      response = await mutationUpdate.mutateAsync(body);

      const jobAreaMain = getJobAreaMain(row?.jobAreaUsers);
      if (jobAreaMain && joaIdMain !== jobAreaMain?.jobArea.joaId) {
        const bodyJobAreaMain = {
          jobArea: {
            joaId: joaIdMain
          },
          user: {
            usrId: row?.usrId,
          },
          joauId: jobAreaMain.joauId,
          joauMainArea: true
        }
        await useUpdateAreaServiceByAxios(jobAreaMain?.joauId, bodyJobAreaMain);
      }

      mutationSecondaryAreas.mutate(areaSecondary, row?.usrId)

      mutationCoresponislbe.mutate(coresponsibles, row?.usrId);
    } else {
      const body = {
        level: {
          levId: level.levId
        },
        usrName,
        usrEmail,
        employee: {
          empId 
        }
      }
      response = await mutationAdd.mutateAsync(body)
      const bodyJobAreaMain = {
        jobArea: {
          joaId: joaIdMain
        },
        user:{
          usrId: response.usrId
        },
        joauMainArea: true
      }
      await useAddAreaUserByAxiosService(bodyJobAreaMain)

      mutationSecondaryAreas.mutate(areaSecondary, response.usrId)

      mutationCoresponislbe.mutate(coresponsibles, response.usrId);
    }

    onEnd(response)
  };

  const handleAddSecondary = () => {
    addSecondary({ joauMainArea: false })
  }


  const isLoading = isLoadingAreas || isLoadingLevels || isLoadingUsers;
  const isLoadingMutation = mutationUpdate.isLoading || mutationCoresponislbe.isLoading || mutationAdd.isLoading;

  return {
    handleSubmit,
    control,
    isLoading,
    areas,
    onSubmit,
    levels,
    users,
    isLoadingMutation,
    areasSecondary,
    handleAddSecondary
  }
}

export default useUserForm;
