import { FILES_SOURCE_EMPLOYEE } from "@Const/files"
import { fieldMaxLength, fieldMinLength, fieldRequired } from "@Const/validations"
import { useEmployeeAddService, useEmployeeUpdateService } from "@Services/employees/useEmployeesServices"
import { useSaveFile } from "@Services/files/useFilesService"
import { cleanArray } from "@Utils/array"
import { isValid } from "@Utils/values"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

const DEFAULT_VALUES = {
  empStatus: true,
  empSystemAccess: false,
}

const useEmployeesForm = ({ row = null, isUpdate = false, onEnd = () => {} }) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  })

  const mutationAdd = useEmployeeAddService()
  const mutationUpdate = useEmployeeUpdateService(row?.empId)
  const fileMutation = useSaveFile()

  useEffect(() => {
    if (isValid(row)){
      if (isValid(row.employeeAddress)){
        const objeto = {...row.employeeAddress}
        setValue('addresses', [{...objeto, emadMain: true}])
      } else {
        setValue('addresses', [])
      }
    }    
  }, [row])
  
  const onSubmit = async ({imagen, addresses, contactTelephonesEmployees, ...data}) => {
    let empId = null
    if (isUpdate) {
      const body = {
        ...data,
        contactTelephonesEmployees: cleanArray(contactTelephonesEmployees, 'coteTelephone'),
      }
      if (addresses.length > 0) {
        body.employeeAddress = {
          ...addresses[0],
          emadStatus: true,
          emadMain: true
        }
      }
      await mutationUpdate.mutateAsync(body)
    } else {
      const body = {
          ...data,
        contactTelephonesEmployees: cleanArray(contactTelephonesEmployees, 'coteTelephone'),
        empAdmissionDate: new Date()
      }
      if (addresses.length > 0) {
        body.employeeAddress = {
          ...addresses[0],
          emadStatus: true,
          emadMain: true
        }
      }
    const response = await mutationAdd.mutateAsync(body)
      empId = response.empId
    }

    if (imagen) {
      await fileMutation.onSaveFile({
        name: imagen.name,
        file: imagen,
        source: FILES_SOURCE_EMPLOYEE,
        sourceId: empId
      });
    }
    
    onEnd()
  }

  const rulesRFC = {
    ...fieldRequired,
    ...fieldMaxLength(13),
    ...fieldMinLength(13)
  }

  const rulesCURP = {
    ...fieldRequired,
    ...fieldMaxLength(18),
    ...fieldMinLength(18)
  }

  const isLoadingForm = mutationAdd.isLoading || mutationUpdate.isLoading

  return {
    control,
    handleSubmit,
    onSubmit,
    isLoadingForm,
    rulesRFC,
    rulesCURP
  }
}

export default useEmployeesForm