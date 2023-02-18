import { useGET, usePOST } from '@Utils/api';

import {
  API_INVOICING_ENTITIES,
  API_INVOICING_ENTITIES_FOREIGN,
  API_AGENT_INVOICING_ENTITIES,
  API_AGENT_INVOICING_ENTITIES_AGENT,
  API_HOLDER_INVOICING_ENTITIES
} from '@Const/constUrls';

export const useAddInvoicingEntity = (onError = () => {}) =>
  usePOST({
    url: API_INVOICING_ENTITIES,
    onError
  });

export const useAddInvoicingEntityForeign = (onError = () => {}) =>
  usePOST({
    url: API_INVOICING_ENTITIES_FOREIGN,
    onError
  });

export const useInvoicingEntitiesByAgent = (agentId, onSuccess = () => {}) =>
  useGET({
    url: `${API_AGENT_INVOICING_ENTITIES_AGENT}/${agentId}`,
    onSuccess
  });

export const useAddAgentInvoicingEntity = () =>
  usePOST({
    url: API_AGENT_INVOICING_ENTITIES
  });

export const useRowInvoicingEntitieService = (
  entityId,
  agentId,
  onSuccess = () => {}
) =>
  useGET({
    url: `${API_AGENT_INVOICING_ENTITIES}/billing-entity/${entityId}/agent/${agentId}`,
    onSuccess
  });

export const useInvoicingEntitiesByHolder = (holderId, onSuccess = () => {}) =>
  useGET({
    url: `${API_HOLDER_INVOICING_ENTITIES}`,
    onSuccess
  });
