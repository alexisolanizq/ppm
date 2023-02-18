import React from 'react';

import Text from '@Component/common/text/Text';
import Flex from '@Component/common/flex/Flex';
import ImageApi from '@Component/common/image/ImageApi';

import { FILES_SOURCE_SIGNATORY } from '@Const/files';

const SignatoriesInfo = ({ row = null }) => {
  if (!row) return null;

  return (
    <>
      <Text className="mb-3" isBig isBold isCenter>
        {`${row.signName} - ${row.areaDTO.joaName}`}
      </Text>
      <Flex justify="center" className="signatureContainer">
        <ImageApi
          isShowImageApi
          source={FILES_SOURCE_SIGNATORY}
          id={row?.signId}
          height={100}
          width={120}
        />
      </Flex>
    </>
  );
};

export default SignatoriesInfo;
