import { VALUE_ONE, VALUE_TWO } from '@Const/const';

export const PAYMENTS = [
  { id: 1, name: 'Pago físico' },
  { id: 0, name: 'Pago dígital' }
];

export const TYPE_PERSON = [
  { id: 1, name: 'Persona física' },
  { id: 2, name: 'Persona moral' }
];

export const GENDER = [
  { id: 'M', name: 'Masculino' },
  { id: 'F', name: 'Femenino' }
];

export const INVENTORS_QUANTITY = [
  { id: 1, value: VALUE_ONE, name: '1 inventor / diseñador' },
  { id: 2, value: VALUE_TWO, name: 'N inventores / diseñadores' }
];

export const STATUS_EXTENDED_LIST = [
  { id: 1, name: 'Activo', value: true },
  { id: 2, name: 'Suspenso', value: false },
  { id: 3, name: 'Inactivo', value: undefined }
];

export const LIST_MOROSO_CUMPLIDO = [
  { id: 1, name: 'Moroso', value: 'moroso' },
  { id: 2, name: 'Cumplido', value: 'cumplido' }
];

export const CONTACTS = [
  { id: VALUE_ONE, label: 'Agustin Mendoza' },
  { id: VALUE_TWO, label: 'america@contacto.com' }
];

export const STATUS_LIST = [
  { id: VALUE_ONE, value: true, label: 'Activo' },
  { id: VALUE_TWO, value: false, label: 'Inactivo' }
];

export const PROCEDURE_TABS = [
  { id: 1, label: 'Información', value: 0 },
  { id: 2, label: 'Inventores', value: 1 },
  { id: 3, label: 'Familia de trámite', value: 2 }
];

export const TITLES = [
  { id: 1, name: 'Mr.' },
  { id: 2, name: 'Ms.' },
  { id: 3, name: 'Mrs.' },
  { id: 4, name: 'Dear.' },
  { id: 5, name: 'Estimada' },
  { id: 6, name: 'Estimado' },
  { id: 7, name: 'Sra.' },
  { id: 8, name: 'Sr.' }
];

export const TYPE_AREA = [
  { id: 2, name: 'Nacional', value: false },
  { id: 1, name: 'Extranjero', value: true }
];

export const TYPE_LIST_RECIPIENT = [
  { id: 1, name: 'General', value: true },
  { id: 2, name: 'Acción en la gestión del trámite', value: false }
];

export const TYPE_RECIPIENT_LIST_PROCEDURE = [
  { id: 1, name: 'Cliente', value: 0 },
  { id: 2, name: 'Titular', value: 1 },
  { id: 3, name: 'Personalizado', value: 2 }
];

export const TYPE_RECIPIENT_ANNUALITY_RENEWAL = [
  { id: 1, name: 'Cliente', value: 0 },
  { id: 2, name: 'Titular', value: 1 }
];

export const TYPE_AGENT_ROL = [
  { id: 1, name: 'Cliente', value: 1 },
  { id: 2, name: 'Asociado', value: 2 },
  { id: 3, name: 'Proveedor', value: 3 }
];

export const LABEL_LIST = [
  { id: 1, name: 'Gerente' },
  { id: 2, name: 'Auxiliar' },
  { id: 3, name: 'Administrador' },
  { id: 4, name: 'Invitado' }
];
