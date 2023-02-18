import { useForm } from 'react-hook-form';

import { useCountryRowUpdateService } from '@Services/countries/useCountriesService';
import { API_COUNTRIES } from '@Const/constUrls';

const DEFAULT_VALUES = {
  counStatus: true
};

const useCountriesForm = ({ row, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  // api
  const mutationUpdate = useCountryRowUpdateService(onEnd);

  // functions
  const onSubmit = async (data) => {
    const { counId, counStatus } = data;
    await mutationUpdate.mutateAsync({
      url: `${API_COUNTRIES}/${counId}/${counStatus}`
    });
  };

  const isLoadingMutation = mutationUpdate.isLoading;

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoadingMutation
  };
};

export default useCountriesForm;
