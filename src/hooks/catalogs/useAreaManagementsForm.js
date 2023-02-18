import useModal from '@Hooks/common/useModal';
import {
  useAddAreaManagementService,
  useUpdateAreaManagementService
} from '@Services/areaManagements/useAreaManagementService';
import { useManagementsActiveService } from '@Services/managements/useManagementService';
import { getValuesById } from '@Utils/values';

const { useAreaActiveListService } = require('@Services/areas/useAreaService');
const { useForm } = require('react-hook-form');

const DEFAULT_VALUES = {
  jaiaStatus: true
};

const useAreaManagementsForm = ({ row, onEnd, isUpdate = false }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

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

  const addAreaManagementMutation = useAddAreaManagementService();
  const updateAreaManagementMutation = useUpdateAreaManagementService(
    row?.jaiaStatus
  );
  const onSubmit = async (body) => {
    const payload = {
      ...body,
      jobArea: getValuesById(areas, 'joaId', body?.jobArea?.joaId),
      impiAddress: getValuesById(managements, 'imadId', body?.impiAddress?.imadId)
    };
    if (isUpdate) {
      await updateAreaManagementMutation.mutateAsync(payload);
    } else {
      await addAreaManagementMutation.mutateAsync(payload);
    }

    onEnd();
  };

  const isLoadingMutation =
    addAreaManagementMutation.isLoading ||
    updateAreaManagementMutation.isLoading;

  const isLoading = isAreaLoading || isManagementLoading;

  return {
    control,
    handleSubmit,
    errors,
    areas,
    onSubmit,
    isLoading,
    isLoadingMutation,
    isAreaOpen,
    closeAreaModal,
    openAreaModal,
    managements,
    isManagementOpen,
    closeManagementModal,
    openManagementModal
  };
};

export default useAreaManagementsForm;
