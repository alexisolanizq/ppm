import useModal from '@Hooks/common/useModal';
import { useCountriesActiveListService } from '@Services/countries/useCountriesService';
import { useCurrencyActiveService } from '@Services/currency/useCurrencyService';
import {
  useAddCurrencyCountryService,
  useUpdateCurrencyCountryService
} from '@Services/currencyCountry/useCurrencyCountryService';
import { getValuesById } from '@Utils/values';
import { useForm } from 'react-hook-form';

const DEFAULT_VALUES = {
  cocuStatus: true
};

const useCountryCurrencyForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const {
    isOpen: isCurrencyOpen,
    closeModal: closeCurrencyModal,
    openModal: openCurrencyModal
  } = useModal();
  
  const {
    isOpen: isCountryOpen,
    closeModal: closeCountryModal,
    openModal: openCountryModal
  } = useModal();

  const { data: currencies, isLoading: isCurrenciesLoading } =
    useCurrencyActiveService();
  const { data: countries, isLoading: isCountriesLoading } =
    useCountriesActiveListService();

  const addCurrencyMutation = useAddCurrencyCountryService();
  const updateCurrencyMutation = useUpdateCurrencyCountryService(row?.cocuId);

  const onSubmit = async (data) => {
    if (data.country.counId.length && !isUpdate) {
      data.country.counId.map(async (item) => {
        const body = {
          currency: getValuesById(currencies, 'currId', data.currency.currId),
          country: getValuesById(countries, 'counId', item),
          cocuStatus: data.cocuStatus
        };
        await addCurrencyMutation.mutateAsync(body);
      });
    } else {
      await updateCurrencyMutation.mutateAsync(data);
    }
    onEnd();
  };

  const isLoadingMutation =
    addCurrencyMutation.isLoading || updateCurrencyMutation.isLoading;

  const isLoading = isCurrenciesLoading || isCountriesLoading;

  return {
    errors,
    control,
    onSubmit,
    isLoading,
    countries,
    currencies,
    handleSubmit,
    isLoadingMutation,
    isCurrencyOpen,
    openCurrencyModal,
    closeCurrencyModal,
    isCountryOpen,
    openCountryModal,
    closeCountryModal
  };
};

export default useCountryCurrencyForm;
