export const updateRow = (array, row, optionId = 'id') => {
  const newArray = [...array]
  return newArray.map(item => {
    if (row[optionId] === item[optionId]) return row
    return item
  })
}

export const removeRow = (array, value, optionId = 'id') => {
  const newArray = [...array]
  const valueNumber = parseInt(value, 10)
  return newArray.filter((item) => parseInt(item[optionId], 10) !== valueNumber)
}

export const insertArrayRows = (array, payload) => {
  const newArray = [...array]
  payload.map(item => newArray.push(item))
  return newArray
}