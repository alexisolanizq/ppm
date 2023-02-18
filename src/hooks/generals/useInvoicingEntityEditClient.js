import { useState } from 'react';

import { useNavigate, useParams } from 'react-router';

import { LINK_CLIENT, LINK_INVOICING_ENTITIES_BY_AGENT } from '@Const/links';
import {
  ID_CATALOG_CFDI,
  ID_CATALOG_REGIME,
  ID_CATALOG_PERSON_TYPE,
  MESSAGE_UPDATE_SUCCESS
} from '@Const/const';
import {
  API_INVOICING_ENTITIES,
  API_INVOICING_ENTITIES_FOREIGN
} from '@Const/constUrls';

import { useUpdateService } from '@Services/useService';
import { useRowClientService } from '@Services/client/useClientService';
import {
  useAddAgentInvoicingEntity,
  useAddInvoicingEntity,
  useRowInvoicingEntitieService
} from '@Services/invoicingentities/useInvoicingEntitiesService';

import { usePUTMutation } from '@Utils/api';
import { getNameClient } from '@Utils/client';
import { showToastSuccess } from '@Utils/toast';

import {
  useInvoicingEntityImage,
  useInvoicingEntityDefault
} from './useInvoicingEntitiesCommon';

const useInvoicingEntityEditClient = () => {
  const navigate = useNavigate();
  const { clientId, invoicingEntityId } = useParams();

  const [invoicingEntity, setInvoicingEntity] = useState(null);

  const { removeEntityDefault, updateEntityDefault } =
    useInvoicingEntityDefault();
  const { isLoadingFiles, getPhoto, saveImage, deleteImage } =
    useInvoicingEntityImage();

  const onSuccess = async (response) => {
    const urlImage = await getPhoto(response.billingEntity.bienId);

    const entity = {
      ...response.billingEntity,
      typePerson: {
        opcgId: response.billingEntity.typePerson.opcgId,
        cagId: ID_CATALOG_PERSON_TYPE
      },
      regime: {
        opcgId: response.billingEntity.regime.opcgId,
        cagId: ID_CATALOG_REGIME
      },
      cfdi: {
        opcgId: response.billingEntity.cfdi.opcgId,
        cagId: ID_CATALOG_CFDI
      },
      country: {
        counId: response.billingEntity.country.counId
      },
      isDefault: response.agbeMain,
      vatNif: response.billingEntity.billingEntityForeign?.biefVatNif,
      ...(urlImage && { imagen: urlImage })
    };

    setInvoicingEntity(entity);
  };

  const { data: agent, isLoadingAgent } = useRowClientService(clientId);
  const { isFetching: isFetchingInvoicing } = useRowInvoicingEntitieService(
    invoicingEntityId,
    clientId,
    onSuccess
  );

  const updateMutationEntity = useUpdateService({
    url: `${API_INVOICING_ENTITIES}/${invoicingEntityId}`,
    isToastMessage: false
  });

  const addMutation = useAddInvoicingEntity();
  const addMutationEntity = useAddAgentInvoicingEntity();
  const updateMutationEntityForeign = usePUTMutation({});

  const updateImage = async (image) => {
    if (image) {
      if (typeof image === 'object') {
        await deleteImage(invoicingEntityId);
        await saveImage(image, invoicingEntityId);
      }
    }
  };

  const onSubmit = async ({
    isDefault,
    imagen,
    vatNif,
    billingEntityForeign,
    ...data
  }) => {
    const payload = data;

    await updateMutationEntity.mutateAsync(payload);

    if (billingEntityForeign && billingEntityForeign.biefVatNif !== vatNif) {
      await updateMutationEntityForeign.mutateAsync({
        url: `${API_INVOICING_ENTITIES_FOREIGN}/${billingEntityForeign.biefId}`,
        data: {
          ...billingEntityForeign,
          biefVatNif: vatNif
        }
      });
    }

    if (isDefault) {
      const isDeleted = await removeEntityDefault(clientId);

      if (isDeleted) {
        await updateEntityDefault(invoicingEntityId, clientId, true);
      }
    }

    await updateImage(imagen);

    showToastSuccess(MESSAGE_UPDATE_SUCCESS);
    navigate(LINK_INVOICING_ENTITIES_BY_AGENT(clientId));
  };

  const onCancel = () => {
    navigate(LINK_INVOICING_ENTITIES_BY_AGENT(clientId));
  };

  const prevLinks = [
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const isLoading = isLoadingAgent || isFetchingInvoicing || isLoadingFiles;
  const isLoadingMutation =
    addMutation.isLoading || addMutationEntity.isLoading;

  return {
    onSubmit,
    onCancel,
    prevLinks,
    isLoading,
    isLoadingMutation,
    invoicingEntity
  };
};

export default useInvoicingEntityEditClient;
