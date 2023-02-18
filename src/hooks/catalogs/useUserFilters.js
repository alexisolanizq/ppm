import { useAreaActiveListService } from "@Services/areas/useAreaService"

const useUserFilters = () => {
  const {data: areas, isLoading} = useAreaActiveListService()

  return {
    areas,
    isLoading
  }
}

export default useUserFilters