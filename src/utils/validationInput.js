export function validationInput(e) {
  if (e === 'true') {
    return { borderColor: '#dc3545' }
  }
  if (e === 'false') {
    return { borderColor: '#28a745' }
  }
  return { borderColor: 'none' };
}