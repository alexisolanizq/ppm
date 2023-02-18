import { isValid } from "./values"

// eslint-disable-next-line import/prefer-default-export
export const textCapitalize = (char) => {
  if (!isValid(char)) return ''

  const newChar = char.toLowerCase()
  return newChar[0].toUpperCase() + newChar.substring(1)
}

export const removeAccents = (string) => string?.normalize('NFD').replace(/[\u0300-\u036f]/g, "")