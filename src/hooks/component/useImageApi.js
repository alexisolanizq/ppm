import { useState } from 'react';

import { useGetFile } from '@Services/files/useFilesService';
import { blobToImage } from '@Utils/blob';

const useImageApi = ({ source = null, id = null }) => {
  const [src, setSrc] = useState(null);
  const { isFetching } = useGetFile({
    source,
    id,
    onSuccess: (response) => {
      setSrc(blobToImage(response));
    }
  });

  return {
    src,
    isLoading: isFetching
  };
};

export default useImageApi;
