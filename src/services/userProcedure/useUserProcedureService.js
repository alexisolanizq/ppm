import { MESSAGE_UPDATE_SUCCESS } from "@Const/const";
import { API_USER_PROCEDURE_PHASES } from "@Const/constUrls";
import { useGET, usePOST } from "@Utils/api";
import { showToastSuccess } from "@Utils/toast";

export const useUserProcedurePhasesListServices = (id, enable = false) =>
  useGET({
    url: `${API_USER_PROCEDURE_PHASES}/${id}`,
    enable
  });

export const useUserProcedurePhaseAdd = () => usePOST({
  url: API_USER_PROCEDURE_PHASES,
  onSuccess: () => showToastSuccess(MESSAGE_UPDATE_SUCCESS)
})