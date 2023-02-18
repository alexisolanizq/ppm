import { useAreaListService } from '@Services/areas/useAreaService';

const useListRecipientsFilters = () => {
  const { data: areasList, isLoading: isLoadingAreas } = useAreaListService();

  const isLoading = isLoadingAreas;

  return {
    isLoading,
    areasList
  };
};

export default useListRecipientsFilters;
