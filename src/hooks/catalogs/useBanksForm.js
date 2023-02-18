import { useForm } from 'react-hook-form';

import { fieldMaxLength, fieldRequired, fieldRequiredRegexAlphaAcents } from '@Const/validations';

import {
  useBankAddService,
  useBankUpdateService
} from '@Services/banks/useBankService';

const DEFAULT_VALUES = {
  ppbaStatus: true
};

const useBanksForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  // api
  const mutation = useBankAddService(onEnd);
  const mutationUpdate = useBankUpdateService(row?.ppbaId, onEnd);

  // functions
  const onSubmit = async (data) => {
    if (isUpdate) {
      await mutationUpdate.mutateAsync(data);
    } else {
      await mutation.mutateAsync(data);
    }
  };

  const fieldName = {
    ...fieldRequiredRegexAlphaAcents,
    ...fieldMaxLength(20)
  };
  const fieldAbreviation = {
    ...fieldRequired,
    ...fieldMaxLength(10)
  };
  const isLoadingMutation = mutation.isLoading || mutationUpdate.isLoading;

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoadingMutation,
    fieldName,
    fieldAbreviation
  };
};

export default useBanksForm;
