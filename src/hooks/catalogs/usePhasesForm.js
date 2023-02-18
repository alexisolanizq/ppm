import { useForm } from 'react-hook-form';
import {
  useAddProcedurePhasesService,
  useUpdateProcedurePhaseService
} from '@Services/phases/usePhaseService';

const DEFAULT_VALUES = {
  prphStatus: true
};

const usePhasesForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  //* Api
  const addPhaseMutation = useAddProcedurePhasesService();
  const updatePhaseMutation = useUpdateProcedurePhaseService(row?.prphId);

  const onSubmit = async (body) => {
    if (isUpdate) {
      await updatePhaseMutation.mutateAsync(body);
    } else {
      await addPhaseMutation.mutateAsync(body);
    }

    onEnd();
  };

  const isLoadingMutation =
    addPhaseMutation.isLoading || updatePhaseMutation.isLoading;

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isLoadingMutation
  };
};

export default usePhasesForm;
