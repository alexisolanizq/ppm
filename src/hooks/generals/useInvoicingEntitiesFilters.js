import { useCfdiListadoService, usePersonTypesListadoService, useRegimesListadoService } from '@Services/generics/useGenericsService';

const useInvoicingEntitiesFilters = () => {
  const { data: cfdis, isLoading: isLoadingCfdi } =
    useCfdiListadoService();
  const { data: regimes, isLoading: isLoadingRegime } =
    useRegimesListadoService();
  const { data: personTypes, isLoading: isLoadingPersonType } =
    usePersonTypesListadoService();

  const isLoading = isLoadingCfdi || isLoadingRegime || isLoadingPersonType

  return {
    cfdis,
    regimes,
    personTypes,
    isLoading,
  }
}

export default useInvoicingEntitiesFilters