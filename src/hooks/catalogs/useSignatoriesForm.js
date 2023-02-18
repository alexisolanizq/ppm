import { useForm } from 'react-hook-form';

import {
  useSignatoryAddService,
  useSignatoryUpdateService
} from '@Services/signatories/useSignatoriesService';
import { useSaveFile } from '@Services/files/useFilesService';
import { useAreaActiveListService } from '@Services/areas/useAreaService';

import { isString } from '@Utils/values';
import { showToastSuccess } from '@Utils/toast';

import { FILES_SOURCE_SIGNATORY } from '@Const/files';
import { MESSAGE_ADD_SUCCESS, MESSAGE_UPDATE_SUCCESS } from '@Const/const';

import useModal from '@Hooks/common/useModal';

import useFiles from './useFiles';

const DEFAULT_VALUES = {
  signStatus: true,
  jobAreas: []
};

const useSignatoriesForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES,
    mode: 'all'
  });

  const {
    isOpen: isOpenAreas,
    openModal: openModalAreas,
    closeModal: closeModalAreas
  } = useModal();

  // api
  const { data: areas, isLoading } = useAreaActiveListService();

  const fileMutationSave = useSaveFile();
  const mutation = useSignatoryAddService();
  const mutationUpdate = useSignatoryUpdateService(row?.signId);
  const { deleteImage } = useFiles({ fileSource: FILES_SOURCE_SIGNATORY });

  // functions
  const saveImages = async (signatories, image, isSingle = false) => {
    if (isSingle) {
      await fileMutationSave.onSaveFile({
        name: image.name,
        file: image,
        source: FILES_SOURCE_SIGNATORY,
        sourceId: signatories.signId
      });
      return;
    }

    await Promise.all(
      signatories.map(async (signatory) =>
        fileMutationSave.onSaveFile({
          name: image.name,
          file: image,
          source: FILES_SOURCE_SIGNATORY,
          sourceId: signatory.signId
        })
      )
    );
  };

  const getAreaName = (id) => {
    const findArea = areas.find((area) => area.joaId === id);

    if (!findArea) return null;

    return findArea.joaName;
  };

  const onSubmit = async ({ jobAreas, signature, ...data }) => {
    if (isUpdate) {
      const signatory = await mutationUpdate.mutateAsync(data);

      if (!isString(signature)) {
        await deleteImage(data.signId);
        await saveImages(signatory, signature, true);
      }

      showToastSuccess(MESSAGE_UPDATE_SUCCESS);
      onEnd();
    } else {
      const body = jobAreas.map((joaId) => ({
        ...data,
        areaDTO: {
          joaId,
          joaName: getAreaName(joaId)
        }
      }));

      const signatories = await mutation.mutateAsync(body);
      await saveImages(signatories, signature);

      showToastSuccess(MESSAGE_ADD_SUCCESS);
      onEnd();
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

export default useSignatoriesForm;
