import { useBankService } from '@Services/banks/useBankService';
import { useCountriesLiestadoService } from '@Services/countries/useCountriesService';
import { useCurrencyService } from '@Services/currency/useCurrencyService';
import { useLanguageActiveListService } from '@Services/languages/useLanguageService';
import { useFieldArray, useForm } from 'react-hook-form';

const DEFAULT_VALUES = {
  officeTelephone: [{ ofteNumber: '' }],
  offStatus: true,
  offStatusAdministration: true
};

const useOfficeForm = ({ row = null }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });
  const { fields: telephones, append: addTelephone } = useFieldArray({
    control,
    name: 'officeTelephone'
  });

  // apis
  const { data: countries, isLoading: isLoadingCountries } =
    useCountriesLiestadoService();
  const { data: languages, isLoading: isLoadingLanguages } =
  useLanguageActiveListService();
  const { data: currencies, isLoading: isLoadingCurrencies } =
    useCurrencyService();
  const { data: banks, isLoading: isLoadingBanks } = useBankService();

  const isLoading =
    isLoadingCountries ||
    isLoadingLanguages ||
    isLoadingCurrencies ||
    isLoadingBanks;

  return {
    control,
    errors,
    isLoading,
    handleSubmit,

    telephones,
    addTelephone,

    countries,
    languages,
    currencies,
    banks,

  };
};

export default useOfficeForm;
