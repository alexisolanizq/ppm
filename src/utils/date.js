import { NO_DATE } from "@Const/const";
import { format, parseISO } from "date-fns";
import { es } from 'date-fns/locale'


export const parseDate  = (date, formato = ' MMMM, H:mm') => {
  const dateParse = parseISO(date);
  return format(dateParse, formato, { locale: es })
}

export const formatDate = (date, msgNoDate = NO_DATE) => {
  if (!date) return msgNoDate
  return parseDate(date, 'dd MMM yyyy')
}

export const formatHour = (date, msgNoDate = NO_DATE) => {
  if (!date) return msgNoDate
  return parseDate(date, 'H:mm')
}