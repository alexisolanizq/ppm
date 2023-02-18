import { TITLE_CATALOGS } from './catalogs';

// Catalogs
export const LINK_CATALOGS = '/catalogos';
export const LINK_CATALOG_AREAS = '/catalogos/areas';
export const LINK_CATALOG_AREAS_ADD = '/catalogos/areas/agregar';
export const LINK_CATALOG_USER = '/catalogos/usuarios';
export const LINK_CATALOG_EMPLOYEES = '/catalogos/empleados';
export const LINK_CATALOG_EMPLOYEES_ADD = '/catalogos/empleados/agregar';

// Generals
export const LINK_CLIENT = '/cliente';
export const LINK_CLIENT_ADD = '/cliente/agregar';
export const LINK_HOLDER = '/titulares';
export const LINK_SEARCH_HOLDER = '/titulares';
export const LINK_HOLDER_ADD = '/titulares/crear';
export const LINK_INVOICING_ENTITIES = '/generales/entidades-facturacion';
export const LINK_INVOICING_ENTITIES_BY_AGENT = (agentId) =>
  `${LINK_CLIENT}/${agentId}/entidades-facturacion`;
export const LINK_OFFICES_BY_AGENT = (agentId) =>
  `${LINK_CLIENT}/${agentId}/sucursales`;
export const LINK_HOLDER_TEST = '/titulares/1';
export const LINK_CONTACT = '/generales/contacto';
export const LINK_SEARCH_CONTACT = '/generales/contacto/buscar';
export const LINK_CONTACT_BY_AGENT = (agentId) =>
  `${LINK_CLIENT}/${agentId}/contacto`;
export const LINK_CONTACT_ADD = '/generales/contacto/agregar';
export const LINK_CONTACT_EDIT = '/generales/contacto/editar/4';

// prevLinks
export const PREVLINK_CATALOG = [
  { link: LINK_CATALOGS, nombre: TITLE_CATALOGS }
];
