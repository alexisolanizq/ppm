import { API_FILES } from '@Const/constUrls';

import { blobToImage } from '@Utils/blob';

import {
  useDeleteMutationFile,
  useGETMutationFile
} from '@Services/files/useFilesService';

const useFiles = ({ fileSource = '' }) => {
  const fileMutationDelete = useDeleteMutationFile();
  const fileMutationGet = useGETMutationFile({
    responseType: 'blob'
  });

  const getPhoto = async (id) => {
    try {
      const response = await fileMutationGet.mutateAsync(
        `${API_FILES}/${fileSource}/${id}`
      );

      return blobToImage(response);
    } catch (error) {
      return null;
    }
  };

  const deleteImage = (id) =>
    fileMutationDelete.mutateAsync(`${API_FILES}/${fileSource}/${id}`);

  return {
    getPhoto,
    deleteImage
  };
};

export default useFiles;
