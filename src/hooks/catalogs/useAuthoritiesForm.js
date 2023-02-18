import { useForm } from 'react-hook-form';

import {
  useAuthorityAddService,
  useAuthorityUpdateService
} from '@Services/authorities/useAuthorityService';
import { useAreaActiveListService } from '@Services/areas/useAreaService';
import useModal from '@Hooks/common/useModal';

const DEFAULT_VALUES = {
  autStatus: true
};

const useAuthoritiesForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const {
    isOpen: isOpenAreas,
    openModal: openModalAreas,
    closeModal: closeModalAreas
  } = useModal();

  // api
  const { data: areas, isLoading } = useAreaActiveListService();

  const mutation = useAuthorityAddService(onEnd);
  const mutationUpdate = useAuthorityUpdateService(row?.autId, onEnd);

  const getAreaName = (id) => {
    const areaIndex = areas.findIndex((item) => item.joaId === id);

    if (areaIndex === -1) return '';

    const area = areas[areaIndex];

    return area.joaName;
  };

  // functions
  const onSubmit = async (data) => {
    const payload = {
      ...data,
      joaName: getAreaName(data.joaId)
    };

    if (isUpdate) {
      await mutationUpdate.mutateAsync(payload);
    } else {
      await mutation.mutateAsync(payload);
    }
  };

  const isLoadingMutation = mutation.isLoading || mutationUpdate.isLoading;

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    isLoadingMutation,
    areas,
    isOpenAreas,
    closeModalAreas,
    openModalAreas
  };
};

export default useAuthoritiesForm;
