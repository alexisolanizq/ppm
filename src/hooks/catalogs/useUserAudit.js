import UserAuditColumns from '@Pages/catalogs/users/UserAuditColumns'
import { useAuditLogListService } from '@Services/auditlog/useAuditLogService'

const useUserAudit = ({ usrId }) => {
  const {data, isLoading} = useAuditLogListService(usrId)

  const columns = UserAuditColumns

  return {
    data,
    isLoading,
    columns
  }
}

export default useUserAudit