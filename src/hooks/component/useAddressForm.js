import { fieldMaxLength, fieldRequired } from '@Const/validations';
import { usePostalCodeService } from '@Services/address/useAddressService';
import { useCountriesLiestadoService } from '@Services/countries/useCountriesService';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const DEFAULT_VALUES = {
  addStatus: true
}

const useAddressForm = ({ row = null, isPrincipal = false }) => {
  const [colonys, setColonys] = useState([])
  const { control, handleSubmit, watch, setValue } = useForm({ defaultValues: row ?? DEFAULT_VALUES });
  
  useEffect(() => {
    if (isPrincipal) {
      setValue('isDefault', true)
    }
  }, [isPrincipal])

  // api
  const { data: countries, isLoading: isLoadingCountries } =
    useCountriesLiestadoService();
  const mutationPostalCode = usePostalCodeService({
    postalCode: watch('addCodePostal'),
    onError: () => {
      setColonys([])
    },
    onSuccess: ({ stateSimpleDTO, townshipCityDTO,  }) => {
      setColonys([])
      
      if (stateSimpleDTO) {
        setValue('addState', stateSimpleDTO?.stateName)
      }

      if (townshipCityDTO) {
        setValue('addTownship', townshipCityDTO?.townName)
      }

      const cityList = townshipCityDTO?.cityListDTOList
      if (cityList && cityList.length > 0) {
        const { cityName, postalCodeSimpleDTOList } = cityList[0]
        const cityNameNew = cityName === 'NotCityName' ? '' : cityName
        setValue('addCity', cityNameNew)

        if (postalCodeSimpleDTOList.length > 0) {
         setColonys(postalCodeSimpleDTOList)
        }
      }
    }
  })

  const rulesCodePostal = {
    ...fieldRequired,
    ...fieldMaxLength(5)
  }
  const isLoading = isLoadingCountries;
  const isLoadingPostalCode = mutationPostalCode.isFetching

  return {
    control,
    handleSubmit,
    isLoading,
    countries,
    rulesCodePostal,
    isLoadingPostalCode,
    colonys
  };
};

export default useAddressForm;
