import { useCfdiListadoService, useRegimesListadoService } from '@Services/generics/useGenericsService';

const useOfficeFilters = () => {
  const { data: cfdis, isLoading: isLoadingCfdi } =
    useCfdiListadoService();
  const { data: regimes, isLoading: isLoadingRegime } =
    useRegimesListadoService();

  const isLoading = isLoadingCfdi || isLoadingRegime

  return {
    cfdis,
    regimes,
    isLoading,
  }
}

export default useOfficeFilters