const { FIELD_REQUIRED } = require('./const');

export const fieldNotRequired = { required: false };
export const fieldRequired = { required: FIELD_REQUIRED };
export const fieldRegexAlpha = {
  pattern: {
    value: /^[a-zA-ZñÑ0-9\s]+$/,
    message: 'Solo se aceptan caracteres alfanuméricos sin acentos'
  }
};
export const fieldRegexAlphaNumeric = {
  pattern: {
    value: /^[a-zA-Z0-9\s]+$/,
    message: 'Solo se aceptan caracteres alfanuméricos'
  }
};
export const fieldRegexAlphaAcents = {
  pattern: {
    value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]+$/,
    message: 'Solo se aceptan caracteres alfanuméricos y acentos'
  }
};
export const fieldRequiredRegexAlphaAcents = {
  ...fieldRequired,
  ...fieldRegexAlphaAcents
};
export const fieldRequiredRegexAlpha = {
  ...fieldRequired,
  ...fieldRegexAlpha
};
export const fieldRequiredRegexAlphaNumeric = {
  ...fieldRequired,
  ...fieldRegexAlphaNumeric
};
export const fieldMaxLength = (max) => ({
  maxLength: { value: max, message: `Máximo ${max} caracteres` }
});
export const fieldMinLength = (min) => ({
  minLength: { value: min, message: `Mínimo ${min} caracteres` }
});
export const InputPropsMaxLength = (max) => ({ maxLength: max });
export const fieldPhones = {
  minLength: {
    value: 10,
    message: 'Mínimo 10 caracteres'
  },
  maxLength: {
    value: 10,
    message: 'Máximo 10 caracteres'
  }
};
