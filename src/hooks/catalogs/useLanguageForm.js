import { useLanguageAddService, useLanguageUpdateService } from "@Services/languages/useLanguageService";
import { useForm } from "react-hook-form"

const DEFAULT_VALUES = {
  lanStatus: true
};

const useLanguageForm = ({ row, isUpdate, onEnd }) => {
  const {control, handleSubmit, formState: { errors}} = useForm({
    defaultValues: row ?? DEFAULT_VALUES,
    mode: 'all'
  })

  const mutation = useLanguageAddService();
  const mutationUpdate = useLanguageUpdateService(row?.lanId);

  const onSubmit = async (data) => {
    if (isUpdate) {
      await mutationUpdate.mutateAsync(data)
    } else {
      await mutation.mutateAsync(data)
    }

    onEnd()
  }

  const isLoadingButton = mutation.isLoading || mutationUpdate.isLoading

  return {
    control,
    handleSubmit,
    isLoadingButton,
    onSubmit,
    errors
  }
}

export default useLanguageForm