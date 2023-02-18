import { useForm } from 'react-hook-form';
import {
  useAddManagementService,
  useUpdateManagementService
} from '@Services/managements/useManagementService';

const DEFAULT_VALUES = {
  imadStatus: true
};

const useManagementForm = ({ row, onEnd, isUpdate = false }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const addManagementMutation = useAddManagementService();
  const updateManagementMutation = useUpdateManagementService(row?.imadId);

  const onSubmit = async (body) => {
    if (isUpdate) {
      await updateManagementMutation.mutateAsync(body);
    } else {
      await addManagementMutation.mutateAsync(body);
    }

    onEnd();
  };

  const isLoadingMutation =
    addManagementMutation.isLoading || updateManagementMutation.isLoading;


  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isLoadingMutation
  };
};

export default useManagementForm;
