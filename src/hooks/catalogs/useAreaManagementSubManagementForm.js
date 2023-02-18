import useModal from '@Hooks/common/useModal';
import { useForm } from 'react-hook-form';
import { useAreaActiveListService } from '@Services/areas/useAreaService';
import { getValuesById } from '@Utils/values';
import { useManagementsActiveService } from '@Services/managements/useManagementService';
import { useAddAreaManagementSubManagementService, useUpdateAreaManagementSubManagement } from '@Services/areaManagementSubManagements/useAreaManagementSubManagementService';
import { useSubManagementActiveService } from '@Services/submanagements/useSubManagementService';

const DEFAULT_VALUES = {
  imsuStatus: true
};

const useAreaManagementSubManagementForm = ({ row, onEnd, isUpdate = false }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const addAreaManagementSubManagementMutation = useAddAreaManagementSubManagementService();
  const updateAreaManagementSubManagementMutation = useUpdateAreaManagementSubManagement(row?.imsuId);

  const {
    isOpen: isSubManagementOpen,
    closeModal: closeSubManagementModal,
    openModal: openSubManagementModal
  } = useModal();

  const { data: subManagements, isLoading: isSubManagementLoading } = useSubManagementActiveService();

  const {
    isOpen: isAreaOpen,
    closeModal: closeAreaModal,
    openModal: openAreaModal
  } = useModal();

  const { data: areas, isLoading: isAreaLoading } = useAreaActiveListService();

  const {
    isOpen: isManagementOpen,
    closeModal: closeManagementModal,
    openModal: openManagementModal
  } = useModal();

  const { data: managements, isLoading: isManagementLoading } =
    useManagementsActiveService();

  const onSubmit = async (body) => {
    const payload = {
      ...body,
      jobArea: getValuesById(areas, 'joaId', body?.jobArea?.joaId),
      management: getValuesById(managements, 'imadId', body?.management?.imadId)
    };

    if (isUpdate) {
      await updateAreaManagementSubManagementMutation.mutateAsync(payload);
    } else {
      await addAreaManagementSubManagementMutation.mutateAsync(payload);
    }

    onEnd();
  };

  const isLoadingMutation =
    addAreaManagementSubManagementMutation.isLoading || updateAreaManagementSubManagementMutation.isLoading;

  const isLoading = isAreaLoading || isManagementLoading || isSubManagementLoading;

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isAreaOpen,
    closeAreaModal,
    openAreaModal,
    isManagementOpen,
    closeManagementModal,
    openManagementModal,
    areas,
    managements,
    isLoadingMutation,
    isLoading,
    subManagements,
    isSubManagementOpen,
    closeSubManagementModal,
    openSubManagementModal
  };
};

export default useAreaManagementSubManagementForm;
