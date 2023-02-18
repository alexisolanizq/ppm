import { useAddCurrencyService, useUpdateCurrencyService } from '@Services/currency/useCurrencyService';
import { useForm } from 'react-hook-form';

const DEFAULT_VALUES = {
  currStatus: true
};

const useCurrencyForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const addCurrencyMutation = useAddCurrencyService();
  const updateCurrencyMutation = useUpdateCurrencyService(row?.currId);

  const onSubmit = async (body) => {
    if (isUpdate) {
      await updateCurrencyMutation.mutateAsync(body);
    } else {
      await addCurrencyMutation.mutateAsync(body);
    }

    onEnd();
  };

  const isLoadingMutation =
    addCurrencyMutation.isLoading || updateCurrencyMutation.isLoading;

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isLoadingMutation
  };
};

export default useCurrencyForm;
