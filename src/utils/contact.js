export const getContactName = ({
    conName,
    conFirstName,
    conLastName,
}) => (`${conName} ${conFirstName} ${conLastName}`)

export const getTelephoneContact = (telephones) => {
    if(!telephones.length > 0) return 'Sin teléfono'
    const {conCountryCode, conPhone} = telephones[0]
    return `${conCountryCode || ''} ${conPhone || ''}`
}

export const getContactLabels = ( labels ) => {
    if( labels === null || !labels.length > 0) return 'Sin Etiquetas'
    return labels.join(', ')
}