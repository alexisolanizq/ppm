import { API_PROCEDURE_PHASES } from '@Const/constUrls';
import { STORE_PHASES } from '@Const/store';
import {
  setProcedurePhases,
  addProcedurePhases,
  updateProcedurePhases
} from '@Redux/catalogs/phaseSlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useProcedurePhaseService = () =>
  useListadoService({
    url: API_PROCEDURE_PHASES,
    store: STORE_PHASES,
    onSaveList: setProcedurePhases,
    listadoName: 'procedurePhases'
  });

export const useProcedurePhaseActiveListService = () =>
  useListadoActiveService({
    service: useProcedurePhaseService,
    status: 'prphStatus'
  });

export const useAddProcedurePhasesService = () =>
  useAddService({
    url: API_PROCEDURE_PHASES,
    onSaveRow: addProcedurePhases
  });

export const useUpdateProcedurePhaseService = (id) =>
  useUpdateService({
    url: `${API_PROCEDURE_PHASES}/${id}`,
    onSaveRow: updateProcedurePhases
  });
