import { useForm } from 'react-hook-form';
import { useAddHolderService } from '@Services/holders/useHolderService';
import { useCountriesLiestadoService } from '@Services/countries/useCountriesService';
import { VALUE_ONE } from '@Const/const';

const DEFAULT_VALUES = {
  holId: null,
  holType: {
    opcgId: VALUE_ONE
  },
  holName: '',
  holFirstName: '',
  holLastName: '',
  holNationality: '',
  holRgpNumber: null,
  holDiscount: null,
  holStatus: false
};

const useHolderForm = ({ onEnd = () => {}, isSubmit = true, row = null }) => {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const { data: countries, isLoading: isLoadingCountries } = useCountriesLiestadoService();

  const addHolderMutation = useAddHolderService(response => {
    onEnd(response)
  })

  const onSubmit = ({
    holType,
    holName,
    holFirstName,
    holLastName,
    holNationality,
    holRgpNumber,
    holDiscount,
    holStatus,
    ...data
  }) => {
    const body = {
        ...data,
        holType: {
            cagId: holType
        },
        holName,
        holFirstName,
        holLastName,
        holNationality,
        holRgpNumber,
        holDiscount,
        holStatus
    }

    if(isSubmit) {
        const response = addHolderMutation.mutateAsync(body)
        onEnd(response)
    } else {
        onEnd(body)
    }
  };

  const isLoading = isLoadingCountries

  return {
    watch,
    control,
    handleSubmit,
    onSubmit,
    errors,
    
    isLoadingMutation: addHolderMutation.isLoading,
    isLoading,
    countries
  };
};

export default useHolderForm;
