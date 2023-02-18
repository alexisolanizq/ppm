import React, { useState } from 'react';

import { useParams } from 'react-router';

import { useForm } from 'react-hook-form';

import Flex from '@Component/common/flex/Flex';
import IconRemove from '@Component/common/icon/IconRemove';
import SelectController from '@Component/common/select/SelectController';
import TextFieldController from '@Component/common/textField/TextFieldController';

import { LINK_CLIENT } from '@Const/links';
import { TITLE_CLIENT } from '@Const/generals';

import { getNameClient } from '@Utils/client';

import { useRowClientService } from '@Services/client/useClientService';

const useEVirtualUploadClient = () => {
  const { clientId } = useParams();

  const list = [
    {
      file: 'file1.jpg',
      tag: 'Tag 1',
      subTag: 'subTag 1',
      fileName: 'FileName 1'
    },
    {
      file: 'file2.png',
      tag: 'Tag 2',
      subTag: 'SubTag 2',
      fileName: 'FileName 2'
    }
  ];
  const [files, setFiles] = useState(list);

  const { control } = useForm({
    mode: 'all'
  });

  const { data: agent, isLoading: isLoadingAgent } =
    useRowClientService(clientId);

  const addFiles = (selectedFiles) => {
    const newFiles = selectedFiles.map((item, index) => ({
      file: item.name,
      tag: `Tag ${index}`,
      subTag: `SubTag${index}`,
      fileName: `FileName ${index}`
    }));
    setFiles([...files, ...newFiles]);
  };

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const headers = [
    'Archivo',
    'Etiqueta',
    'Sub-etiqueta',
    'Nombre del archivo',
    'Acciones'
  ];

  const columns = [
    {
      field: 'file',
      render: (item) => item.file
    },
    {
      field: 'tag',
      render: (item) => (
        <SelectController
          name="tag"
          label="* Area"
          control={control}
          options={[]}
          optionId="id"
          optionName="name"
          className="mt-3"
        />
      )
    },
    {
      field: 'subTag',
      render: (item) => (
        <SelectController
          name="subTag"
          label="* Area"
          control={control}
          options={[]}
          optionId="id"
          optionName="name"
          className="mt-3"
        />
      )
    },
    {
      field: 'fileName',
      render: (item) => (
        <TextFieldController
          name="fileName"
          label="* Nombre del archivo"
          control={control}
          className="mb-3 mt-3"
        />
      )
    },
    {
      field: 'acciones',
      render: (_item, index) => (
        <Flex justify="center" gap={8}>
          <IconRemove
            onClick={() => {
              console.log(index);
            }}
          />
        </Flex>
      )
    }
  ];

  const isLoading = isLoadingAgent;

  return {
    isLoading,
    prevLinks,

    headers,
    columns,
    files,
    addFiles
  };
};

export default useEVirtualUploadClient;
