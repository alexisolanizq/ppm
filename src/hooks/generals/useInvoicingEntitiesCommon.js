import { useSelector } from 'react-redux';

import { blobToImage } from '@Utils/blob';
import { usePUTMutation } from '@Utils/api';

import { FILES_SOURCE_INVOICING_ENTITY } from '@Const/files';
import { API_AGENT_INVOICING_ENTITIES, API_FILES } from '@Const/constUrls';

import {
  useSaveFile,
  useGETMutationFile,
  useFilesListService,
  useDeleteMutationFile
} from '@Services/files/useFilesService';

export const useInvoicingEntityImage = (enable = false) => {
  const { data: filesList, isLoading: isLoadingFiles } =
    useFilesListService(enable);

  const fileMutationSave = useSaveFile();
  const fileMutationDelete = useDeleteMutationFile();
  const fileMutationGet = useGETMutationFile({ responseType: 'blob' });

  const getFile = (id) => {
    let file = null;
    const fileIndex = filesList.findIndex(
      (fileItem) =>
        fileItem.fileSource === FILES_SOURCE_INVOICING_ENTITY &&
        fileItem.fileSourceId === parseInt(id, 10)
    );

    if (fileIndex !== -1) {
      file = filesList[fileIndex];
    }

    return file;
  };

  const getPhoto = async (id, search = true) => {
    if (search) {
      const file = getFile(id);

      if (!file) return null;
    }

    const response = await fileMutationGet.mutateAsync(
      `/files/invoicing_entity/${id}`
    );

    return blobToImage(response);
  };

  const getPhotos = async (list) => {
    const listMap = await Promise.all(
      list.map(async (entity) => {
        const fileIndex = filesList.findIndex(
          (file) =>
            file.fileSource === 'invoicing_entity' &&
            file.fileSourceId === entity.billingEntity.bienId
        );

        if (fileIndex !== -1) {
          const urlImage = await getPhoto(entity.billingEntity.bienId, false);

          return {
            ...entity,
            ...(urlImage && { image: urlImage })
          };
        }

        return entity;
      })
    );

    return listMap;
  };

  const saveImage = async (image, id) => {
    await fileMutationSave.onSaveFile({
      name: image.name,
      file: image,
      source: FILES_SOURCE_INVOICING_ENTITY,
      sourceId: id
    });
  };

  const deleteImage = async (id) => {
    const file = getFile(id);

    if (file) {
      await fileMutationDelete.mutateAsync(`${API_FILES}/${file.fileId}`);
    }
  };

  return {
    getPhoto,
    getPhotos,
    saveImage,
    deleteImage,
    isLoadingFiles
  };
};

export const useInvoicingEntityDefault = () => {
  const invoicingEntities = useSelector(
    (state) => state.agentInvoicingEntities.agentInvoicingEntities
  );
  const loadInvoicingEntities = useSelector(
    (state) => state.agentInvoicingEntities.loadInvoicingEntities
  );

  const updateMutationEntity = usePUTMutation({});

  const updateEntityDefault = async (bienId, ageId, agbeMain = false) => {
    const url = `${API_AGENT_INVOICING_ENTITIES}/billing-entity/${bienId}/agent/${ageId}`;

    const data = {
      billingEntity: {
        bienId
      },
      ageId,
      agbeMain
    };

    await updateMutationEntity.mutateAsync({
      url,
      data
    });
  };

  const removeEntityDefault = async (clientId) => {
    if (invoicingEntities.length === 0) return false;

    const entityIndex = invoicingEntities.findIndex(
      (item) => item.agbeMain === true && item.ageId === parseInt(clientId, 10)
    );

    if (entityIndex === -1) {
      return true;
    }

    const invoicingEntity = invoicingEntities[entityIndex];

    await updateEntityDefault(invoicingEntity.billingEntity.bienId, clientId);
    return true;
  };

  const isFirstRegisteredEntity = () =>
    loadInvoicingEntities && invoicingEntities.length === 0;

  return {
    removeEntityDefault,
    updateEntityDefault,
    isFirstRegisteredEntity
  };
};
