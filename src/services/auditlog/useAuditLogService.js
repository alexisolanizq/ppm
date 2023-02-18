import { API_AUDIT_LOG } from "@Const/constUrls";
import { STORE_AUDIT_LOG } from "@Const/store";
import { setAudits, setUserId } from "@Redux/catalogs/auditLogSlice";
import { useListadoByIdService } from "@Services/useService";

// eslint-disable-next-line import/prefer-default-export
export const useAuditLogListService = (usrId) => useListadoByIdService({
  onSaveList: setAudits,
  onSaveId: setUserId,
  store: STORE_AUDIT_LOG,
  url: `${API_AUDIT_LOG}/${usrId}`,
  id: usrId
})