import { useForm } from 'react-hook-form';
import {
  useAddSubManagementService,
  useUpdateSubManagement
} from '@Services/submanagements/useSubManagementService';

const DEFAULT_VALUES = {
  imsuStatus: true
};

const useSubManagementForm = ({ row, onEnd, isUpdate = false }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const addSubManagementMutation = useAddSubManagementService();
  const updateSubManagementMutation = useUpdateSubManagement(row?.imsuId);

  const onSubmit = async (body) => {
    if (isUpdate) {
      await updateSubManagementMutation.mutateAsync(body);
    } else {
      await addSubManagementMutation.mutateAsync(body);
    }

    onEnd();
  };

  const isLoadingMutation =
    addSubManagementMutation.isLoading || updateSubManagementMutation.isLoading;

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isLoadingMutation,
  };
};

export default useSubManagementForm;
