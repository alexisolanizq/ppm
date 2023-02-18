import useModal from '@Hooks/common/useModal';
import {
  useAddCorrespondenceService,
  useUpdateCorrespondenceService
} from '@Services/correspondences/useCorrespondenceService';
import { useLanguageActiveListService } from '@Services/languages/useLanguageService';
import { getValuesById } from '@Utils/values';
import { useForm } from 'react-hook-form';

const DEFAULT_VALUES = {
  cotiStatus: true
};

const useCorrespondencesForm = ({ row, onEnd, isUpdate = false }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });
  const {
    isOpen: isLanguageOpen,
    closeModal: closeLanguageModal,
    openModal: openLanguageModal
  } = useModal()
  const { data: languages, isLoading: isLanguageLoading } =
    useLanguageActiveListService();
  const addCorrespondenceMutation = useAddCorrespondenceService();
  const updateCorrespondenceMutation = useUpdateCorrespondenceService(
    row?.cotiId
  );

  const onSubmit = async (body) => {
    const payload = {
        ...body,
        language: getValuesById(languages, 'lanId', body?.language?.lanId)
    }
    if (isUpdate) {
      await updateCorrespondenceMutation.mutateAsync(payload);
    } else {
      await addCorrespondenceMutation.mutateAsync(payload);
    }
    onEnd();
  };

  const isLoadingMutation =
    addCorrespondenceMutation.isLoading ||
    updateCorrespondenceMutation.isLoading;

  const isLoading = isLanguageLoading;

  return {
    control,
    handleSubmit,
    errors,
    languages,
    onSubmit,
    isLoading,
    isLoadingMutation,
    isLanguageOpen,
    openLanguageModal,
    closeLanguageModal
  };
};

export default useCorrespondencesForm;
