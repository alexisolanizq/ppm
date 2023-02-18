import { MESSAGE_ADD_SUCCESS } from "@Const/const";
import useModal from "@Hooks/common/useModal";
import { useAreaActiveListService } from "@Services/areas/useAreaService";
import { useAreaReferenceAddService, useAreaReferenceUpdateService } from "@Services/areasReference/useAreasReferenceService";
import { useListReferenceTypeService } from "@Services/referenceTypes/useReferenceTypesService";
import { showToastSuccess } from "@Utils/toast";
import { useForm } from "react-hook-form";


const DEFAULT_VALUES = {
  retys: []
}

const useAreasReferenceForm = ({ row, isUpdate, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });
  const { isOpen: isOpenAreas, openModal: openModalAreas, closeModal: closeModalAreas } = useModal()

  // apis
  const { data: areas, isLoading: isLoadingAreas } = useAreaActiveListService()
  const { data: referenceTypes, isLoading: isLoadingReferenceTypes } = useListReferenceTypeService()
  const mutationAdd = useAreaReferenceAddService();
  const mutationUpdate = useAreaReferenceUpdateService(row?.jartId);

  const onSubmit = async ({ retys, ...body }) => {
    if (isUpdate) {
      await mutationUpdate.mutateAsync(body)
      onEnd()
    } else {
      retys.forEach(async (retyId, index) => {
        const data = {
          joaId: body.joaId,
          retyId
        };
        await mutationAdd.mutateAsync(data)
        if (index === (retys.length - 1)) {
          showToastSuccess(MESSAGE_ADD_SUCCESS)
          onEnd()
        }
      })     
    }
   
  };

  const isLoading = isLoadingAreas || isLoadingReferenceTypes
  const isLoadingMutation = mutationUpdate.isLoading || mutationAdd.isLoading

  return {
    onSubmit,
    isLoadingMutation,
    control,
    handleSubmit,
    errors,
    isLoading,
    referenceTypes,
    areas,
    isOpenAreas,
    closeModalAreas,
    openModalAreas
  }
}

export default useAreasReferenceForm