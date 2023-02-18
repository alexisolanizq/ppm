import { ID_CATALOG_AGENT, ID_CATALOG_PAY_METHOD, ID_CATALOG_WAY_PAY, ID_OPTION_ASOCIATE_CATALOG_AGENT, ID_OPTION_CLIENT_CATALOG_AGENT, ID_OPTION_PROVIDER_CATALOG_AGENT } from '@Const/const';
import { NO_ADRESSS, NO_COUNTRY, NO_TELEPHONE } from '@Const/formsFields';
import { getAdressText } from './address';
import { textCapitalize } from './text';
import { isNull, isValid } from './values';

const AGENT_BANK_CLIENT = {
  paymentMethod: {
    cagId: ID_CATALOG_PAY_METHOD
  },
  role: {
    opcgId: ID_OPTION_CLIENT_CATALOG_AGENT,
    cagId: ID_CATALOG_AGENT
  },  
  paymentForm: {
    cagId: ID_CATALOG_WAY_PAY
  }    
}

const AGENT_BANK_PARTNER = {
  paymentMethod: {
    cagId: ID_CATALOG_PAY_METHOD
  },
  role: {
    opcgId: ID_OPTION_ASOCIATE_CATALOG_AGENT,
    cagId: ID_CATALOG_AGENT
  },
  paymentForm: {
    cagId: ID_CATALOG_WAY_PAY
  }
}

const AGENT_BANK_PROVIDER = {
  paymentMethod: {
    cagId: ID_CATALOG_PAY_METHOD
  },
  role: {
    opcgId: ID_OPTION_PROVIDER_CATALOG_AGENT,
    cagId: ID_CATALOG_AGENT
  },
  paymentForm: {
    cagId: ID_CATALOG_WAY_PAY
  }
}

export const AGENT_BANKS_DEFAULT = [
  AGENT_BANK_CLIENT,
  AGENT_BANK_PROVIDER,
  AGENT_BANK_PARTNER
]

export const getNameClient = ({
  ageBussinesName,
  ageName,
  ageFirstName,
  ageLastName
}) => {
  if (ageBussinesName) return ageBussinesName;
  if (ageName) return `${ageName} ${ageFirstName} ${ageLastName}`;

  return '';
};

export const getTelephoneClient = (telephones) => {
  if (!telephones.length > 0) return NO_TELEPHONE
  const {agteCountryCode, agteNumber} = telephones[0]
  return `${agteCountryCode || ''} ${agteNumber || ''}`
}

export const getAddressClient = (adresses) => {
  if (adresses.length === 0) return NO_ADRESSS;
  return getAdressText(adresses[0].address)
};

export const getCountryName = (adresses) => {
  if (adresses.length === 0) return NO_COUNTRY;
  const { country } = adresses[0].address

  return country.counNameSpa || NO_COUNTRY
}

export const filterBanks = (item) => isValid(item.agacBankAccount);

export const getRolesClient = (roles) =>
  roles.map((item) => textCapitalize(item.role?.name)).join(', ');

export const getBillingEntityMain = (agentBillingEntities) => {
  if (agentBillingEntities.length === 0) return null

  return agentBillingEntities.find(f => f.agbeMain)
}

export const getRFC = (agentBillingEntities) => {
  const billingEntityMain = getBillingEntityMain(agentBillingEntities)
  if (isNull(billingEntityMain)) return 'XEXX010101000'

  return billingEntityMain?.billingEntity.bienRfc
} 

export const getAgentAdm = (agentAdms) => {
  if (agentAdms.length === 0) return null

  return agentAdms[0]
}

export const getAgentAdmChargeableOrUncollectibe = (agentAdms, uncollectibe = false) => {
  const agentAdm = getAgentAdm(agentAdms)
  if (isNull(agentAdm)) return 'S/F'

  if (uncollectibe) {
    const { agadUncollectibleInvoiceTerm, uncollectibleInvoiceTerm: { name }} = agentAdm
    return `${agadUncollectibleInvoiceTerm} ${name}`
  }

  const { agadChargeableInvoiceTerm, chargeableInvoiceTerm: { name }} = agentAdm
  return `${agadChargeableInvoiceTerm} ${name}`
}

export const fillBanks = (banks) => {
  if (banks.length === 0) return AGENT_BANKS_DEFAULT

  return AGENT_BANKS_DEFAULT.map((bank) => {
    const rowFind = banks.find(f => f.role.opcgId === bank.role.opcgId)
    if (rowFind) {
      return rowFind
    }
    
    return bank
  })
}

export const getInvoicing = (agentInvoicings) => {
  if (!isValid(agentInvoicings) || agentInvoicings.length === 0) return null
  return agentInvoicings[0]
}

export const getCurrency = (agentInvoicings) => {
  const agentInvoicing = getInvoicing(agentInvoicings)
  if (!agentInvoicing) return 'S/D'

  return agentInvoicing.currency?.currAbbreviation
}

export const getChangeType = (agentInvoicings) => {
  const agentInvoicing = getInvoicing(agentInvoicings)
  if (!agentInvoicing) return 'S/C'
  return agentInvoicing.aginChangeType
}

export const getTaxationPercentage = (agentInvoicings) => {
  const agentInvoicing = getInvoicing(agentInvoicings)
  if (!agentInvoicing) return 'S/C'
  return agentInvoicing.aginTaxationPercentage
}
