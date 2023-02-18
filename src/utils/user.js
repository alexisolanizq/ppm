import { isValidArray } from "./values"

export const getJobAreaMain = (jobareas) => {
  if (!isValidArray(jobareas)) return null
  return jobareas.find(f => f.joauMainArea)
}

export const getJobAreasSecondary = (jobareas) => {
  if (!isValidArray(jobareas)) return []
  return jobareas.filter(f => f.joauMainArea === false) || []
}

export const getJobAreaName = (item) => item?.jobArea?.joaName || 'S/N'

export const getJobAreaMainName = (jobareas) => {
  const jobAreaMain = getJobAreaMain(jobareas)
  if (jobAreaMain) {
    return getJobAreaName(jobAreaMain)
  }

  return 'Sin área principal'
}

export const getNameUser = (usr) => {
  if (usr.employee) {
    const { empName } = usr.employee
    return empName
  }

  return 'S/N'
}

export const getNamesCorresponsibles = (corresponsibles) => {
  if (!isValidArray(corresponsibles)) return 'S/C'
  return corresponsibles.map(({coresponsible}) => coresponsible.usrName).join(', ')
}