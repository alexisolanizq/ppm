import { API_PROCEDURES_HOLDER_PROCEDURE } from "@Const/constUrls"
import { useGET } from "@Utils/api"

const useProcedureHoldersService = (procId = '') => {
  const {isFetching, data, isError, isSuccess} = useGET({
    url: `${API_PROCEDURES_HOLDER_PROCEDURE}/${procId}`,
    enable: procId.length > 0,
  })

  const isErrorFinal = isError || data?.length === 0

  return {
    isLoading: isFetching,
    isError: isErrorFinal,
    isSuccess: isSuccess && !isErrorFinal,
    data
  }
}

export default useProcedureHoldersService