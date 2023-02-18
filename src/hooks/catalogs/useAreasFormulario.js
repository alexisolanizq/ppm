import { fieldMaxLength, fieldRequired } from '@Const/validations';
import { useAreaAddService, useAreaUpdateService } from '@Services/areas/useAreaService';
import { useForm } from 'react-hook-form';

const DEFAULT_VALUES = {
  joaForeign: false,
  joaStatus: true
};

const useAreasFormulario = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  // api
  const mutation = useAreaAddService();
  const mutationUpdate = useAreaUpdateService(row?.joaId);

  // functions
  const onSubmit = async (body) => {
    if (isUpdate) {
      await mutationUpdate.mutateAsync(body)
    } else {
      await mutation.mutateAsync(body);
    }
    
    onEnd()
  };

  const fieldName = {
    ...fieldRequired,
    ...fieldMaxLength(20)
  };
  const fieldAbreviation = {
    ...fieldRequired,
    ...fieldMaxLength(10)
  };
  const fieldReference = !isUpdate ? fieldRequired : {};
  const isLoadingMutation = mutation.isLoading || mutationUpdate.isLoading

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoadingMutation,
    fieldName,
    fieldAbreviation,
    fieldReference
  };
};

export default useAreasFormulario;
