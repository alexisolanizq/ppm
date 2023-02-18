import { API_JOBAREAS_PROCEDUREPHASES } from '@Const/constUrls';
import { STORE_JOBAREAS_PROCEDUREPHASES } from '@Const/store';
import {
  setJobAreasProcedurePhases,
  addJobAreaProcedurePhase,
  updateJobAreaProcedurePhase
} from '@Redux/catalogs/jobAreaProcedurePhaseSlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';
import { useGET } from '@Utils/api';

export const useJobAreaProcedurePhaseService = () =>
  useListadoService({
    url: API_JOBAREAS_PROCEDUREPHASES,
    store: STORE_JOBAREAS_PROCEDUREPHASES,
    onSaveList: setJobAreasProcedurePhases,
    listadoName: 'jobAreaProcedurePhases'
  });

export const useJobAreaProcedurePhaseActiveListService = () =>
  useListadoActiveService({
    service: useJobAreaProcedurePhaseService,
    status: 'jappStatus'
  });

export const useJobAreProPhaMutationService = (jobAreaId, onSuccess) =>
  useGET({
    url: API_JOBAREAS_PROCEDUREPHASES,
    params: { 'job-area-id': jobAreaId },
    nameQuery: `${API_JOBAREAS_PROCEDUREPHASES}/${jobAreaId}`,
    onSuccess,
  });

export const useAddJobAreaProcedurePhaseService = () =>
  useAddService({
    url: API_JOBAREAS_PROCEDUREPHASES,
    onSaveRow: addJobAreaProcedurePhase
  });

export const useUpdateJobAreaProcedurePhaseService = (id) =>
  useUpdateService({
    url: `${API_JOBAREAS_PROCEDUREPHASES}/${id}`,
    onSaveRow: updateJobAreaProcedurePhase
  });
