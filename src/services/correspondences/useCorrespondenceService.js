import { API_CORRESPONDENCES_TITLES } from "@Const/constUrls";
import { STORE_CORRESPONDENCES } from "@Const/store";
import { addCorrespondence, setCorrespondences, updateCorrespondence } from "@Redux/catalogs/correspondenceSlice";
import { useAddService, useListadoActiveService, useListadoService, useUpdateService } from "@Services/useService";

export const useCorrespondencesListService = () => useListadoService({
    url: API_CORRESPONDENCES_TITLES,
    store: STORE_CORRESPONDENCES,
    onSaveList: setCorrespondences,
    listadoName: 'correspondences'
})

export const useAddCorrespondenceService = () => useAddService({
    url: API_CORRESPONDENCES_TITLES,
    onSaveRow: addCorrespondence
})

export const useUpdateCorrespondenceService = (id) => useUpdateService({
    url: `${API_CORRESPONDENCES_TITLES}/${id}`,
    onSaveRow: updateCorrespondence
})

export const useCorrespondencesActiveService = () => useListadoActiveService({
    service: useCorrespondencesListService,
    status: 'cotiStatus'
})