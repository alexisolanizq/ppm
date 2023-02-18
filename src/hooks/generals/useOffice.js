import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOfficesData,
  fetchOfficeData,
  addOfficeData,
  updateOfficeData,
  fetchBanks
} from '@Redux/generals/officeSlice';
import { fetchCountries } from '@Redux/catalogs/countriesSlice';
import {
  HTTP_STATUS_CREATED,
  MESSAGE_ADD_ERROR,
  MESSAGE_ADD_SUCCESS,
  MESSAGE_UPDATE_ERROR,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_LIMIT_FILE,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE
} from '@Const/const';

const useOffice = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [officeID, setOfficeId] = useState(null);
  const [update, setUpdate] = useState(false);
  const [errors, setErrors] = useState(false);
  const nationalities = useSelector((state) => state.office.nationalities);
  const office = useSelector((state) => state.office.office);
  const banks = useSelector((state) => state.banks.banksList);
  const countries = useSelector((state) => state.country.countries);
  const expirationUnit = useSelector((state) => state.office.expirationUnit);
  const personTypes = useSelector((state) => state.office.personTypes);
  const [officesData, setOfficesData] = useState([]);
  const [personType, setPersonType] = useState('1');
  const [alertMessage, setAlertMessage] = useState('');
  const [officeData, setOfficeData] = useState({
    id: '',
    ageId: '',
    name: '',
    codePostal: '',
    street: '',
    outsideNumber: '',
    innerNumber: '',
    colony: '',
    city: '',
    township: '',
    state: '',
    country: '',
    email: '',
    fax: '',
    lenIdCorrespondence: '',
    currency: '',
    exchangeRate: '',
    siteWeb: '',
    nameLogo: '',
    status: true,
    statusAdministration: true,
    bank: '',
    accountBank: '',
    taxationPercentage: '',
    discountClient: '',
    paymentCurrency: ''
  });

  const [agentTelephonesOffice, setPhonesAgentOffice] = useState([
    {
      id: 1,
      number: '',
      countryCode: '552',
      offId: ''
    }
  ]);
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const addInputPhonesAgent = () => {
    setPhonesAgentOffice([
      ...agentTelephonesOffice,
      {
        index: agentTelephonesOffice.length + 1,
        number: '',
        countryCode: 552,
        offId: officeData.id
      }
    ]);
  };
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const handleOffice = (prop, e) => {
    setOfficeData({ ...officeData, [prop]: e });
  };
  const onDropRejected = () => {
    setAlertMessage(MESSAGE_LIMIT_FILE);
  };
  const getOfficesData = async () => {
    const responseOfficesData = await dispatch(fetchOfficesData());
    setOfficesData(responseOfficesData);
  };
  const getOfficeIdData = async (officeId) => {
    setOfficeId(officeId);
    const response = await dispatch(fetchOfficeData(officeId));
    setOfficeData({
      ...officeData,
      id: response.id,
      ageId: response.ageId,
      name: response.name,
      codePostal: response.codePostal,
      street: response.street,
      outsideNumber: response.outsideNumber,
      innerNumber: response.innerNumber,
      colony: response.colony,
      city: response.city,
      township: response.township,
      state: response.state,
      country: response.country,
      email: response.email,
      fax: response.fax ? response.fax : 0,
      lenIdCorrespondence: response.lenIdCorrespondence,
      currency: response.currency,
      exchangeRate: response.exchangeRate,
      siteWeb: response.siteWeb,
      nameLogo: response.nameLogo,
      status: response.status,
      statusAdministration: response.statusAdministration,
      bank: response.bank,
      accountBank: response.accountBank ? response.accountBank : '',
      taxationPercentage: response.taxationPercentage
        ? response.taxationPercentage
        : '',
      officeBillingEntitys: response.officeBillingEntitys,
      officeContacts: response.officeContacts,
      officeCustomers: response.officeCustomers
    });
    const updatedArray = [...agentTelephonesOffice];
    updatedArray[0].offId = response.id;
    setPhonesAgentOffice(updatedArray);
    return response;
  };
  const getOfficeData = async () => {
    try {
      setUpdate(true);
      // dispatch(getExpirationUnitData());
      dispatch(fetchCountries());
      // dispatch(getNationalityData());
      // dispatch(getPersonTypeData());
      dispatch(fetchBanks());
      return true;
    } catch (error) {
      return error;
    }
  };
  const handleInputPhonesAgentOffice = (prop, e, index) => {
    const clonedInputs = [...agentTelephonesOffice];
    clonedInputs.splice(index, 1, {
      ...agentTelephonesOffice[index],
      [prop]: e
    });
    setPhonesAgentOffice(clonedInputs);
  };
  const createOffice = async () => {
    try {
      const data = {
        ageId: officeData.ageId,
        name: officeData.name,
        codePostal: officeData.codePostal,
        street: officeData.street,
        outsideNumber: officeData.outsideNumber,
        innerNumber: officeData.innerNumber,
        colony: officeData.colony,
        city: officeData.city,
        township: officeData.township,
        state: officeData.state,
        country: officeData.country,
        email: officeData.email,
        fax: parseInt(officeData.fax, 10),
        lenIdCorrespondence: officeData.lenIdCorrespondence,
        currency: officeData.currency,
        exchangeRate: parseInt(officeData.exchangeRate, 10),
        siteWeb: officeData.siteWeb,
        nameLogo: officeData.nameLogo,
        status: officeData.status,
        statusAdministration: officeData.statusAdministration,
        bank: officeData.bank,
        accountBank: officeData.accountBank,
        taxationPercentage: parseInt(officeData.taxationPercentage, 10),
        officeCustomers: officeData.officeCustomers,
        officeTelephones: agentTelephonesOffice,
        officeBillingEntitys: officeData.officeBillingEntitys,
        officeContacts: officeData.officeContacts
      };
      if (
        officeData.ageId === '' ||
        officeData.name === '' ||
        officeData.codePostal === '' ||
        officeData.street === '' ||
        officeData.outsideNumber === '' ||
        officeData.innerNumber === '' ||
        officeData.colony === '' ||
        officeData.city === '' ||
        officeData.township === '' ||
        officeData.state === '' ||
        officeData.country === '' ||
        officeData.email === '' ||
        officeData.fax === '' ||
        officeData.lenIdCorrespondence === '' ||
        officeData.currency === '' ||
        officeData.exchangeRate === '' ||
        officeData.siteWeb === '' ||
        officeData.nameLogo === '' ||
        officeData.status === '' ||
        officeData.statusAdministration === '' ||
        officeData.bank === '' ||
        officeData.accountBank === '' ||
        officeData.taxationPercentage === '' ||
        officeData.officeCustomers === '' ||
        agentTelephonesOffice === '' ||
        officeData.officeBillingEntitys === '' ||
        officeData.officeContacts === ''
      ) {
        setErrors(true);
      }
      const response = await dispatch(addOfficeData(data));
      if (response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  const editOffice = async () => {
    try {
      const data = {
        id: officeData.id,
        ageId: officeData.ageId,
        name: officeData.name,
        codePostal: officeData.codePostal,
        street: officeData.street,
        outsideNumber: officeData.outsideNumber,
        innerNumber: officeData.innerNumber,
        colony: officeData.colony,
        city: officeData.city,
        township: officeData.township,
        state: officeData.state,
        country: officeData.country,
        email: officeData.email,
        fax: parseInt(officeData.fax, 10),
        lenIdCorrespondence: officeData.lenIdCorrespondence,
        currency: officeData.currency,
        exchangeRate: parseInt(officeData.exchangeRate, 10),
        siteWeb: officeData.siteWeb,
        nameLogo: officeData.nameLogo,
        status: officeData.status,
        statusAdministration: officeData.statusAdministration,
        bank: officeData.bank,
        accountBank: officeData.accountBank,
        taxationPercentage: parseInt(officeData.taxationPercentage, 10),
        officeCustomers: officeData.officeCustomers,
        officeTelephones: agentTelephonesOffice,
        officeBillingEntitys: officeData.officeBillingEntitys,
        officeContacts: officeData.officeContacts
      };
      const response = await dispatch(updateOfficeData(data, officeID));
      if (response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  const onDropAccepted = useCallback(async (acceptedFiles) => {
    setFile(
      acceptedFiles.map((item) => ({
        preview: URL.createObjectURL(item)
      }))
    );
  }, []);
  return {
    office,
    alertMessage,
    file,
    nationalities,
    update,
    countries,
    personTypes,
    officeData,
    expirationUnit,
    agentTelephonesOffice,
    banks,
    personType,
    officesData,
    getErrorValue,
    getHelperText,
    getOfficeIdData,
    getOfficesData,
    onDropRejected,
    onDropAccepted,
    handleOffice,
    handleInputPhonesAgentOffice,
    getOfficeData,
    createOffice,
    editOffice,
    addInputPhonesAgent,
    setPersonType,
    setOfficeData
  };
};

export default useOffice;
