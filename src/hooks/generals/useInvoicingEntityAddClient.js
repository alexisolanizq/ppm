import { useNavigate, useParams } from 'react-router';

import { MESSAGE_ADD_SUCCESS } from '@Const/const';
import { LINK_CLIENT, LINK_INVOICING_ENTITIES_BY_AGENT } from '@Const/links';

import { getNameClient } from '@Utils/client';
import { showToastSuccess } from '@Utils/toast';

import {
  useAddInvoicingEntity,
  useAddAgentInvoicingEntity,
  useAddInvoicingEntityForeign
} from '@Services/invoicingentities/useInvoicingEntitiesService';
import { useSaveFile } from '@Services/files/useFilesService';
import { useRowClientService } from '@Services/client/useClientService';

import {
  useInvoicingEntityImage,
  useInvoicingEntityDefault
} from './useInvoicingEntitiesCommon';

const useInvoicingEntityAddClient = () => {
  const navigate = useNavigate();
  const { clientId } = useParams();

  const { data: agent, isLoading: isLoadingAgent } =
    useRowClientService(clientId);
  const { saveImage } = useInvoicingEntityImage();
  const { removeEntityDefault, isFirstRegisteredEntity } =
    useInvoicingEntityDefault();

  const fileMutation = useSaveFile();
  const addMutation = useAddInvoicingEntity();
  const addMutationEntity = useAddAgentInvoicingEntity();
  const addMutationEntityForeign = useAddInvoicingEntityForeign();

  const onSubmit = async ({ isDefault, imagen, vatNif, ...datas }) => {
    const payload = datas;

    const response = await addMutation.mutateAsync(payload);

    if (vatNif) {
      const bodyForeign = {
        billingEntityId: response.bienId,
        biefVatNif: vatNif
      };

      await addMutationEntityForeign.mutateAsync(bodyForeign);
    }

    let agbeMain = isDefault;

    if (!isFirstRegisteredEntity()) {
      if (isDefault) {
        const isDeleted = await removeEntityDefault(clientId);

        if (!isDeleted) {
          agbeMain = false;
        }
      }
    } else {
      agbeMain = true;
    }

    const body = {
      billingEntity: {
        bienId: response.bienId
      },
      ageId: clientId,
      agbeMain
    };

    await addMutationEntity.mutateAsync(body);

    if (imagen) {
      await saveImage(imagen, response.bienId);
    }

    showToastSuccess(MESSAGE_ADD_SUCCESS);
    navigate(LINK_INVOICING_ENTITIES_BY_AGENT(clientId));
  };

  const onCancel = () => {
    navigate(LINK_INVOICING_ENTITIES_BY_AGENT(clientId));
  };

  const prevLinks = [
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const isLoading = isLoadingAgent;
  const isLoadingMutation =
    addMutation.isLoading ||
    fileMutation.isLoading ||
    addMutationEntity.isLoading;

  return {
    onSubmit,
    onCancel,
    prevLinks,
    isLoading,
    isLoadingMutation
  };
};

export default useInvoicingEntityAddClient;
