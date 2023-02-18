import { useJobAreProPhaMutationService } from "@Services/phases/useJobAreaProcedurePhaseService"
import { useState } from "react"

const useMultiCheckboxPhases = ({ joaId }) => {
  const [options, setOptions] = useState([])
  const {isFetching: isLoading} = useJobAreProPhaMutationService(joaId, (response) => {
    if (response.length > 0) {
      setOptions(response.map((item) => ({
        id: item.jappId,
        label: item.prphName,
      })))
    }
  })

  return {
    options,
    isLoading
  }
}

export default useMultiCheckboxPhases