import { useForm } from 'react-hook-form';

import {
  useTempRepositoryFolderAddService,
  useTempRepositoryFolderUpdateService
} from '@Services/tempRepositoryFolders/useTempRepositoryFolderService';
import { useAreaActiveListService } from '@Services/areas/useAreaService';

const DEFAULT_VALUES = {
  tmrfStatus: true
};

const useTempRepositoryFoldersForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES,
    mode: 'all'
  });

  // api
  const { data: areas, isLoading } = useAreaActiveListService();

  const mutation = useTempRepositoryFolderAddService(onEnd);
  const mutationUpdate = useTempRepositoryFolderUpdateService(
    row?.tmrfId,
    onEnd
  );

  // functions
  const onSubmit = async (data) => {
    if (isUpdate) {
      await mutationUpdate.mutateAsync(data);
    } else {
      await mutation.mutateAsync(data);
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
    areas
  };
};

export default useTempRepositoryFoldersForm;
