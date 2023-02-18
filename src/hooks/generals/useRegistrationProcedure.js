import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import { fetchLegalFigures } from '@Redux/catalogs/legalFiguresSlice';
import { fetchOfficesData } from '@Redux/generals/officeSlice';
import { fetchHoldersData } from '@Redux/generals/holderSlice';
import { fetchCountries } from '@Redux/catalogs/countriesSlice';
import { fetchTypeClass } from '@Redux/catalogs/classesSlice';
import {
  addProceduresData,
  fetchSearchJobs,
  addProcedureAgent,
  addProcedureHolder,
  fetchMotherReference,
  fetchInvoicingEntities
} from '@Redux/generals/procedureSlice';
import {
  HTTP_STATUS_CREATED,
  MESSAGE_ADD_ERROR,
  MESSAGE_ADD_SUCCESS,
  TYPE_ERROR_MESSAGE,
  TYPE_SUCCESS_MESSAGE,
  MESSAGE_CHECK_VALUES_RED_PROCEDURE,
  MESSAGE_RECORD_NOT_FOUND,
  ID_CATALOG_EXPIRATION_UNIT,
  ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
  ID_OPTION_SEARCH_TABLE_JOB_AREA,
  ID_OPTION_MEXICO_TABLE_COUNTRY,
  ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE,
  ID_OPTION_PATENT_TABLE_JOB_AREA,
  ID_OPTION_REGISTER_APPLICATION_NUMBER_TABLE_PROCEDURE_MANAGEMENT_ACTION,
  ID_OPTION_TEST_TABLE_REFERENCE_TYPE,
  ID_OPTION_MARKS_TABLE_JOB_AREA,
  ID_OPTION_FOREIGN_MARKS_TABLE_JOB_AREA,
  ID_OPTION_FOREIGN_PATENT_TABLE_JOB_AREA,
  ID_OPTION_DOMAIN_NAMES_TABLE_JOB_AREA,
  ID_OPTION_COPYRIGHT_TABLE_JOB_AREA,
  MESSAGE_AREA_PROCEDURE_SELECTED,
  ID_MARK_PROCEDURE_TYPE,
  ID_FOREIGN_MARK_PROCEDURE_TYPE,
  ID_FOREIGN_PATENT_PROCEDURE_TYPE,
  ID_PATENT_PROCEDURE_TYPE,
  ID_GENERAL_PROCEDURE_TYPE,
  ID_SEARCH_PROCEDURE_TYPE,
  ID_DOMAIN_NAMES_PROCEDURE_TYPE,
  MESSAGE_LIMIT_FILE
} from '@Const/const';

const useRegistrationProcedure = () => {
  const steps = ['step 1', 'step 2', 'step 3', 'step 4', 'step 5'];
  const dispatch = useDispatch();
  const areasList = useSelector(({ areas }) => areas.areas);
  const holdersList = useSelector(({ holders }) => holders.holdersList);
  const clients = useSelector((state) => state.client.clients);
  const classes = useSelector((state) => state.classes.typeClasses);
  const referenceJobArea = useSelector(({ areas }) => areas.references);
  const offices = useSelector((state) => state.office.offices);
  const invoicingEntitiesList = useSelector(
    (state) => state.invoicingEntities.invoicingEntitiesDataList
  );
  const countries = useSelector((state) => state.country.countries);
  const legalFiguresList = useSelector(
    ({ legalFigures }) => legalFigures.legalFigures
  );
  const searchJobs = useSelector(({ procedure }) => procedure.searchJobs);
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [typeRecipent, setTypeRecipent] = useState('custom');
  const [registrationData, setRegistrationData] = useState({
    procedureArea: '',
    isExpiration: false,
    isExpirationAssociated: false,
    isDivisional: false,
    isSubreference: false,
    searchArea: '',
    reference: '',
    divisional: '',
    description: '',
    desingClass: '',
    class: '',
    clases: [],
    case: '',
    motherReference: '',
    numberRI: '',
    area: '',
    legalFigure: '',
    typeSearch: '',
    searchOf: 'patentes',
    areaId: '',
    titleProcedureSearch: '',
    titleProcedureBrand: '',
    titleProcedurePantentEn: '',
    titleProcedurePantentEs: '',
    referenceDivisional: '',
    numberPCT: '',
    country: '',
    inventors: '',
    relatedBrands: '',
    isRI: false,
    date: null,
    dateRI: null,
    dateRIRenovation: null,
    filingDate: null,
    expirationDate: null,
    expirationDateAssociated: null
  });
  const [emails, setEmails] = useState([]);
  const [emailsCC, setEmailsCC] = useState([]);
  const [emailsCCO, setEmailsCCO] = useState([]);
  const [file, setFile] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [clientsData, setClientData] = useState([
    { id: 1, client: '', office: '', reference: '', state: '1' }
  ]);
  const [holdersData, setHolderData] = useState([
    { id: 1, reference: '', holder: '' }
  ]);
  const [prioritiesData, setPrioritiesData] = useState([]);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => skipped.has(step);
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const getErrorValueNull = (inputError) => !!(errors && inputError === null);
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const handleForm = (e) => {
    setModalShow(e);
  };
  const createProcedureAgent = async () => {
    try {
      const data = {};
      const response = await dispatch(addProcedureAgent(data));
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
  const createProcedureHolder = async () => {
    try {
      const data = {};
      const response = await dispatch(addProcedureHolder(data));
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
  const createProcedureRI = async () => {
    try {
      const data = {
        numberRi: 'string',
        dateRi: '2022-08-26',
        dateRenewalRi: '2022-08-26',
        procedure: {
          id: 0,
          reference: 'string',
          motherReference: 'string',
          dateObjetive: '2022-08-26',
          dateExpirationPriority: '2022-08-26',
          dateDocumentReceived: '2022-08-26',
          associatedExpirationDate: '2022-08-26',
          certifiedCopies: 0,
          divisional: true,
          status: {
            opcgId: 0,
            cagId: 0,
            name: 'string',
            abbreviation: 'string',
            status: true
          },
          jobArea: {
            id: 0,
            name: 'string',
            abbreviation: 'string',
            foreign: true,
            status: true
          },
          legalFigure: {
            id: 0,
            spanishName: 'string',
            englishName: 'string',
            status: true,
            jobAreaReferenceType: {
              id: 0,
              jobAreaId: 0,
              jobAreaName: 'string',
              referenceTypeId: 0,
              referenceTypeName: 'string'
            }
          },
          country: {
            counId: 0,
            counNameSpa: 'string',
            counNameEng: 'string',
            counShortAbbreviation: 'string',
            counLargeAbbreviation: 'string',
            counStatus: true
          },
          legalFigureProcedureType: {
            id: 0,
            legalFigureId: 0,
            legalFigureSpanishName: 'string',
            legalFigureEnglishName: 'string',
            procedureTypeId: 0,
            procedureTypeName: 'string',
            status: true
          },
          referenceType: {
            id: 0,
            name: 'string',
            status: true
          },
          procedureManagementAction: {
            prmaId: 0,
            prmaName: 'string',
            prmaAbbreviation: 'string',
            tmpRepoFolder: {
              tmrfId: 0,
              tmrfName: 'string',
              tmrfStatus: true,
              jobArea: {
                id: 0,
                name: 'string',
                abbreviation: 'string',
                foreign: true,
                status: true
              }
            },
            prmaExpiration: true,
            prmaStatus: true,
            jobAreaProcedurePhase: {
              id: 0,
              jobAreaId: 0,
              jobAreaName: 'string',
              procedurePhaseId: 0,
              procedurePhaseName: 'string',
              status: true
            },
            priority: {
              opcgId: 0,
              cagId: 0,
              name: 'string',
              abbreviation: 'string',
              status: true
            },
            level: {
              id: 0,
              idHierarchy: 0,
              name: 'string'
            }
          }
        }
      };
      const response = await dispatch(addProceduresData(data));
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
  const createProcedure = async (data) => {
    try {
      const response = await dispatch(addProceduresData(data));
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
  const handleDivisional = async () => {
    if (registrationData.isDivisional) {
      let response;
      if (registrationData.motherReference.length > 0) {
        response = await dispatch(
          fetchMotherReference(registrationData.motherReference)
        );
      } else {
        return false;
      }
      if ((!response === response.length) === 0) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_RECORD_NOT_FOUND,
          type: TYPE_ERROR_MESSAGE
        });
        return false;
      }
      handleForm(true);
      return false;
    }
    return true;
  };
  const checkErrorSearch = (e, procedureType) => {
    if (procedureType === ID_SEARCH_PROCEDURE_TYPE) {
      if (e === 1) {
        if (registrationData.areaId === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      } else if (e === 2) {
        if (registrationData.areaId === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
        const data = {};
        createProcedure(data);
      } else if (e === 3) {
        if (registrationData.areaId === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      }
    }
    return true;
  };

  const checkErrorGeneral = (e, procedureType) => {
    if (procedureType === ID_GENERAL_PROCEDURE_TYPE) {
      if (e === 1) {
        if (registrationData.areaId === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      }
      if (e === 2) {
        if (registrationData.areaId === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
        const data = {
          reference: '',
          motherReference: '',
          dateObjetive: null,
          dateExpirationPriority: registrationData.isExpiration
            ? registrationData.expirationDate
            : null,
          associatedExpirationDate: registrationData.isExpirationAssociated
            ? registrationData.expirationDateAssociated
            : null,
          dateDocumentReceived: null,
          certifiedCopies: null,
          divisional: false,
          referenceConsecutive: '',
          status: {
            opcgId: ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
            cagId: ID_CATALOG_EXPIRATION_UNIT
          },
          jobArea: {
            id: ID_OPTION_SEARCH_TABLE_JOB_AREA
          },
          legalFigure: {
            id: registrationData.legalFigure
          },
          country: {
            counId: ID_OPTION_MEXICO_TABLE_COUNTRY
          },
          legalFigureProcedureType: {
            id: ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE
          },
          referenceType: {
            id: ID_OPTION_TEST_TABLE_REFERENCE_TYPE
          }
        };
        createProcedure(data);
      }
    }
    return true;
  };
  const checkErrorPatent = async (e, procedureType) => {
    try {
      if (procedureType === ID_PATENT_PROCEDURE_TYPE) {
        if (e === 1) {
          const response = handleDivisional();
          if (response) return false;
          if (registrationData.country === '') {
            setAlertMessage({
              isOpen: true,
              message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
              type: TYPE_ERROR_MESSAGE
            });
            setErrors(true);
            return false;
          }
        } else if (e === 2) {
          if (
            registrationData.numberPCT === '' ||
            registrationData.titleProcedurePantentEn === '' ||
            registrationData.titleProcedurePantentEs === '' ||
            registrationData.inventors === '' ||
            registrationData.filingDate === '' ||
            registrationData.expirationDate === ''
          ) {
            setAlertMessage({
              isOpen: true,
              message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
              type: TYPE_ERROR_MESSAGE
            });
            setErrors(true);
            return false;
          }
          const data = {
            reference: '',
            motherReference: '',
            dateObjetive: null,
            dateExpirationPriority: registrationData.isExpiration
              ? registrationData.expirationDate
              : null,
            associatedExpirationDate: registrationData.isExpirationAssociated
              ? registrationData.expirationDateAssociated
              : null,
            dateDocumentReceived: null,
            certifiedCopies: null,
            divisional: registrationData.isDivisional
              ? registrationData.divisional
              : null,
            status: {
              opcgId: ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
              cagId: ID_CATALOG_EXPIRATION_UNIT
            },
            jobArea: {
              id: ID_OPTION_PATENT_TABLE_JOB_AREA
            },
            legalFigure: {
              id: registrationData.legalFigure
            },
            country: {
              counId: ID_OPTION_MEXICO_TABLE_COUNTRY
            },
            legalFigureProcedureType: {
              id: ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE
            },
            referenceType: {
              id: ID_OPTION_TEST_TABLE_REFERENCE_TYPE
            },
            procedureManagementAction: {
              prmaId:
                ID_OPTION_REGISTER_APPLICATION_NUMBER_TABLE_PROCEDURE_MANAGEMENT_ACTION
            }
          };
          createProcedure(data);
          createProcedureRI();
        }
      }
      return true;
    } catch (error) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_RECORD_NOT_FOUND,
        type: TYPE_ERROR_MESSAGE
      });
      return false;
    }
  };
  const checkErrorPatentForeing = (e, procedureType) => {
    if (procedureType === ID_FOREIGN_PATENT_PROCEDURE_TYPE) {
      if (e === 1) {
        const response = handleDivisional();
        if (response) return false;
        if (registrationData.country === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      } else if (e === 2) {
        if (
          registrationData.numberPCT === '' ||
          registrationData.titleProcedurePantentEn === '' ||
          registrationData.titleProcedurePantentEs === '' ||
          registrationData.inventors === '' ||
          registrationData.filingDate === '' ||
          registrationData.expirationDate === ''
        ) {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
        const data = {
          reference: '',
          motherReference: '',
          dateObjetive: null,
          dateExpirationPriority: registrationData.isExpiration
            ? registrationData.expirationDate
            : null,
          associatedExpirationDate: registrationData.isExpirationAssociated
            ? registrationData.expirationDateAssociated
            : null,
          dateDocumentReceived: null,
          certifiedCopies: null,
          divisional: registrationData.isDivisional
            ? registrationData.divisional
            : null,
          status: {
            opcgId: ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
            cagId: ID_CATALOG_EXPIRATION_UNIT
          },
          jobArea: {
            id: ID_OPTION_FOREIGN_PATENT_TABLE_JOB_AREA
          },
          legalFigure: {
            id: registrationData.legalFigure
          },
          country: {
            counId: ID_OPTION_MEXICO_TABLE_COUNTRY
          },
          legalFigureProcedureType: {
            id: ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE
          },
          referenceType: {
            id: ID_OPTION_TEST_TABLE_REFERENCE_TYPE
          },
          procedureManagementAction: {
            prmaId:
              ID_OPTION_REGISTER_APPLICATION_NUMBER_TABLE_PROCEDURE_MANAGEMENT_ACTION
          }
        };
        createProcedure(data);
      }
    }
    return true;
  };
  const checkErrorBrand = (e, procedureType) => {
    if (procedureType === ID_MARK_PROCEDURE_TYPE) {
      if (e === 1) {
        if (registrationData.country === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      }
      if (e === 2) {
        if (registrationData.isRI) {
          if (
            registrationData.numberPCT === '' ||
            registrationData.titleProcedurePantentEn === '' ||
            registrationData.titleProcedurePantentEs === '' ||
            registrationData.inventors === '' ||
            registrationData.titlePE === '' ||
            registrationData.filingDate === null ||
            registrationData.expirationDate === null ||
            registrationData.dateRI === null ||
            registrationData.dateRIRenovation === null
          ) {
            setAlertMessage({
              isOpen: true,
              message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
              type: TYPE_ERROR_MESSAGE
            });
            setErrors(true);
            return false;
          }
        } else if (
          registrationData.titleProcedureBrand === '' ||
          registrationData.class === '' ||
          registrationData.description === '' ||
          registrationData.relatedBrands === '' ||
          registrationData.filingDate === '' ||
          registrationData.expirationDate === ''
        ) {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
        const data = {
          reference: '',
          motherReference: '',
          dateObjetive: null,
          dateExpirationPriority: registrationData.isExpiration
            ? registrationData.expirationDate
            : null,
          associatedExpirationDate: registrationData.isExpirationAssociated
            ? registrationData.expirationDateAssociated
            : null,
          dateDocumentReceived: null,
          certifiedCopies: null,
          divisional: registrationData.isDivisional
            ? registrationData.divisional
            : null,
          status: {
            opcgId: ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
            cagId: ID_CATALOG_EXPIRATION_UNIT
          },
          jobArea: {
            id: ID_OPTION_MARKS_TABLE_JOB_AREA
          },
          legalFigure: {
            id: registrationData.legalFigure
          },
          country: {
            counId: ID_OPTION_MEXICO_TABLE_COUNTRY
          },
          legalFigureProcedureType: {
            id: ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE
          },
          referenceType: {
            id: ID_OPTION_TEST_TABLE_REFERENCE_TYPE
          },
          procedureManagementAction: {
            prmaId:
              ID_OPTION_REGISTER_APPLICATION_NUMBER_TABLE_PROCEDURE_MANAGEMENT_ACTION
          }
        };
        createProcedure(data);
      }
    }
    return true;
  };
  const checkErrorBrandForeing = (e, procedureType) => {
    if (procedureType === ID_FOREIGN_MARK_PROCEDURE_TYPE) {
      if (e === 1) {
        if (registrationData.country === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      }
      if (e === 2) {
        if (registrationData.isRI) {
          if (
            registrationData.numberPCT === '' ||
            registrationData.titleProcedurePantentEn === '' ||
            registrationData.titleProcedurePantentEs === '' ||
            registrationData.inventors === '' ||
            registrationData.titlePE === '' ||
            registrationData.filingDate === null ||
            registrationData.expirationDate === null ||
            registrationData.dateRI === null ||
            registrationData.dateRIRenovation === null
          ) {
            setAlertMessage({
              isOpen: true,
              message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
              type: TYPE_ERROR_MESSAGE
            });
            setErrors(true);
            return false;
          }
        } else if (
          registrationData.titleProcedureBrand === '' ||
          registrationData.class === '' ||
          registrationData.description === '' ||
          registrationData.relatedBrands === '' ||
          registrationData.filingDate === '' ||
          registrationData.expirationDate === ''
        ) {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
        const data = {
          reference: '',
          motherReference: '',
          dateObjetive: null,
          dateExpirationPriority: registrationData.isExpiration
            ? registrationData.expirationDate
            : null,
          associatedExpirationDate: registrationData.isExpirationAssociated
            ? registrationData.expirationDateAssociated
            : null,
          dateDocumentReceived: null,
          certifiedCopies: null,
          divisional: registrationData.isDivisional
            ? registrationData.divisional
            : null,
          status: {
            opcgId: ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
            cagId: ID_CATALOG_EXPIRATION_UNIT
          },
          jobArea: {
            id: ID_OPTION_FOREIGN_MARKS_TABLE_JOB_AREA
          },
          legalFigure: {
            id: registrationData.legalFigure
          },
          country: {
            counId: ID_OPTION_MEXICO_TABLE_COUNTRY
          },
          legalFigureProcedureType: {
            id: ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE
          },
          referenceType: {
            id: ID_OPTION_TEST_TABLE_REFERENCE_TYPE
          },
          procedureManagementAction: {
            prmaId:
              ID_OPTION_REGISTER_APPLICATION_NUMBER_TABLE_PROCEDURE_MANAGEMENT_ACTION
          }
        };
        createProcedure(data);
      }
    }
    return true;
  };
  const checkErrorLitigation = (e, procedureType) => {
    if (procedureType === 'L') {
      if (e === 1) {
        if (registrationData.country === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      }
      if (e === 2) {
        if (
          registrationData.titleProcedurePantentEn === '' ||
          registrationData.titleProcedurePantentEs === '' ||
          registrationData.case === '' ||
          registrationData.filingDate === null ||
          registrationData.expirationDate === null
        ) {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
        const data = {
          reference: '',
          motherReference: '',
          dateObjetive: null,
          dateExpirationPriority: registrationData.isExpiration
            ? registrationData.expirationDate
            : null,
          associatedExpirationDate: registrationData.isExpirationAssociated
            ? registrationData.expirationDateAssociated
            : null,
          dateDocumentReceived: null,
          certifiedCopies: null,
          divisional: registrationData.isDivisional
            ? registrationData.divisional
            : null,
          status: {
            opcgId: ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
            cagId: ID_CATALOG_EXPIRATION_UNIT
          },
          jobArea: {
            id: ID_OPTION_PATENT_TABLE_JOB_AREA
          },
          legalFigure: {
            id: registrationData.legalFigure
          },
          country: {
            counId: ID_OPTION_MEXICO_TABLE_COUNTRY
          },
          legalFigureProcedureType: {
            id: ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE
          },
          referenceType: {
            id: ID_OPTION_TEST_TABLE_REFERENCE_TYPE
          },
          procedureManagementAction: {
            prmaId:
              ID_OPTION_REGISTER_APPLICATION_NUMBER_TABLE_PROCEDURE_MANAGEMENT_ACTION
          }
        };
        createProcedure(data);
      }
    }
    return true;
  };
  const checkErrorDomainName = (e, procedureType) => {
    if (procedureType === ID_DOMAIN_NAMES_PROCEDURE_TYPE) {
      if (e === 1) {
        if (registrationData.country === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      }
      if (e === 2) {
        if (
          registrationData.titleProcedurePantentEn === '' ||
          registrationData.titleProcedurePantentEs === '' ||
          registrationData.case === '' ||
          registrationData.filingDate === null ||
          registrationData.expirationDate === null
        ) {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
        const data = {
          reference: '',
          motherReference: '',
          dateObjetive: null,
          dateExpirationPriority: registrationData.isExpiration
            ? registrationData.expirationDate
            : null,
          associatedExpirationDate: registrationData.isExpirationAssociated
            ? registrationData.expirationDateAssociated
            : null,
          dateDocumentReceived: null,
          certifiedCopies: null,
          divisional: registrationData.isDivisional
            ? registrationData.divisional
            : null,
          status: {
            opcgId: ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
            cagId: ID_CATALOG_EXPIRATION_UNIT
          },
          jobArea: {
            id: ID_OPTION_DOMAIN_NAMES_TABLE_JOB_AREA
          },
          legalFigure: {
            id: registrationData.legalFigure
          },
          country: {
            counId: ID_OPTION_MEXICO_TABLE_COUNTRY
          },
          legalFigureProcedureType: {
            id: ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE
          },
          referenceType: {
            id: ID_OPTION_TEST_TABLE_REFERENCE_TYPE
          },
          procedureManagementAction: {
            prmaId:
              ID_OPTION_REGISTER_APPLICATION_NUMBER_TABLE_PROCEDURE_MANAGEMENT_ACTION
          }
        };
        createProcedure(data);
      }
    }
    return true;
  };
  const checkErrorCopyRight = (e, procedureType) => {
    if (procedureType === 'D') {
      if (e === 1) {
        if (registrationData.country === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
      }
      if (e === 2) {
        if (
          registrationData.titleProcedurePantentEn === '' ||
          registrationData.titleProcedurePantentEs === '' ||
          registrationData.case === '' ||
          registrationData.filingDate === null ||
          registrationData.expirationDate === null
        ) {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return false;
        }
        const data = {
          reference: '',
          motherReference: '',
          dateObjetive: null,
          dateExpirationPriority: registrationData.isExpiration
            ? registrationData.expirationDate
            : null,
          associatedExpirationDate: registrationData.isExpirationAssociated
            ? registrationData.expirationDateAssociated
            : null,
          dateDocumentReceived: null,
          certifiedCopies: null,
          divisional: registrationData.isDivisional
            ? registrationData.divisional
            : null,
          status: {
            opcgId: ID_OPTION_DAYS_CATALOG_EXPIRATION_UNIT,
            cagId: ID_CATALOG_EXPIRATION_UNIT
          },
          jobArea: {
            id: ID_OPTION_COPYRIGHT_TABLE_JOB_AREA
          },
          legalFigure: {
            id: registrationData.legalFigure
          },
          country: {
            counId: ID_OPTION_MEXICO_TABLE_COUNTRY
          },
          legalFigureProcedureType: {
            id: ID_OPTION_MARKS_PCTI_LEGAL_FIGURE_PROCEDURE_TYPE
          },
          referenceType: {
            id: ID_OPTION_TEST_TABLE_REFERENCE_TYPE
          },
          procedureManagementAction: {
            prmaId:
              ID_OPTION_REGISTER_APPLICATION_NUMBER_TABLE_PROCEDURE_MANAGEMENT_ACTION
          }
        };
        createProcedure(data);
      }
    }
    return true;
  };

  const handleNext = async () => {
    setErrors(false);
    let newSkipped = skipped;
    switch (activeStep) {
      case 0:
        if (registrationData.procedureArea === '') {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_AREA_PROCEDURE_SELECTED,
            type: TYPE_ERROR_MESSAGE
          });
          setErrors(true);
          return;
        }
        break;
      case 1:
        const respSearch = checkErrorSearch(
          activeStep,
          registrationData.procedureArea
        );

        const respPatent = await checkErrorPatent(
          activeStep,
          registrationData.procedureArea
        );

        const respPatentForeing = checkErrorPatentForeing(
          activeStep,
          registrationData.procedureArea
        );

        const respBrand = checkErrorBrand(
          activeStep,
          registrationData.procedureArea
        );

        const respBrandForeing = checkErrorBrandForeing(
          activeStep,
          registrationData.procedureArea
        );

        const respLitigation = checkErrorLitigation(
          activeStep,
          registrationData.procedureArea
        );

        const respDomainName = checkErrorDomainName(
          activeStep,
          registrationData.procedureArea
        );

        const respCopyRight = checkErrorCopyRight(
          activeStep,
          registrationData.procedureArea
        );
        if (
          !respSearch ||
          !respPatent ||
          !respPatentForeing ||
          !respBrand ||
          !respBrandForeing ||
          !respLitigation ||
          !respDomainName ||
          !respCopyRight
        ) {
          return;
        }
        break;
      case 2:
        const resGeneral = checkErrorGeneral(
          activeStep,
          registrationData.procedureArea
        );

        const resSearch = checkErrorSearch(
          activeStep,
          registrationData.procedureArea
        );

        const resPatent = checkErrorPatent(
          activeStep,
          registrationData.procedureArea
        );

        const resPatentForeing = checkErrorPatentForeing(
          activeStep,
          registrationData.procedureArea
        );

        const resBrand = checkErrorBrand(
          activeStep,
          registrationData.procedureArea
        );

        const resBrandForeing = checkErrorBrandForeing(
          activeStep,
          registrationData.procedureArea
        );

        const resLitigation = checkErrorLitigation(
          activeStep,
          registrationData.procedureArea
        );

        const resDomainName = checkErrorDomainName(
          activeStep,
          registrationData.procedureArea
        );

        const resCopyRight = checkErrorCopyRight(
          activeStep,
          registrationData.procedureArea
        );
        if (
          !resGeneral ||
          !resSearch ||
          !resPatent ||
          !resPatentForeing ||
          !resBrand ||
          !resBrandForeing ||
          !resLitigation ||
          !resDomainName ||
          !resCopyRight
        ) {
          return;
        }
        break;
      case 3:
        createProcedureAgent();
        createProcedureHolder();
        break;
      default:
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_CHECK_VALUES_RED_PROCEDURE,
          type: TYPE_ERROR_MESSAGE
        });
    }
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const editDivisional = () => {
    handleForm(false);
    setActiveStep(2);
    window.scrollTo(0, 0);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const init = () => {
    dispatch(fetchCountries());
    dispatch(fetchAreas());
    dispatch(fetchLegalFigures());
    // dispatch(fetchClientsData());
    dispatch(fetchOfficesData());
    dispatch(fetchInvoicingEntities());
    dispatch(fetchHoldersData());
    dispatch(fetchCountries());
    dispatch(fetchTypeClass());
    dispatch(fetchSearchJobs());
  };
  const handleRegistrationData = (prop, e) => {
    setRegistrationData({ ...registrationData, [prop]: e });
  };
  const handleClients = (index, prop) => (e) => {
    const updatedArray = [...clientsData];
    updatedArray[index][prop] = e.target.value;
    setClientData(updatedArray);
  };
  const handlePriorities = (index, prop, e) => {
    const updatedArray = [...prioritiesData];
    updatedArray[index][prop] = e;
    setPrioritiesData(updatedArray);
  };
  const handleRecipent = (prop) => {
    setTypeRecipent(prop);
  };
  const handleHolders = (index, prop) => (e) => {
    const updatedArray = [...holdersData];
    updatedArray[index][prop] = e.target.value;
    setHolderData(updatedArray);
  };
  const removeClients = (index) => {
    setClientData([
      ...clientsData.slice(0, index),
      ...clientsData.slice(index + 1, clientsData.length)
    ]);
  };
  const removePriorities = (index) => {
    setPrioritiesData([
      ...prioritiesData.slice(0, index),
      ...prioritiesData.slice(index + 1, prioritiesData.length)
    ]);
  };
  const removeHolders = (index) => {
    setHolderData([
      ...holdersData.slice(0, index),
      ...holdersData.slice(index + 1, holdersData.length)
    ]);
  };
  const addClient = () => {
    setClientData([
      ...clientsData,
      {
        id: clientsData.length + 1,
        client: '',
        office: '',
        reference: '',
        state: '1'
      }
    ]);
  };
  const addHolder = () => {
    setHolderData([
      ...holdersData,
      {
        id: holdersData.length + 1,
        reference: '',
        holder: ''
      }
    ]);
  };
  const addPriorities = () => {
    setPrioritiesData([
      ...prioritiesData,
      {
        id: prioritiesData.length + 1,
        number: '',
        codeDas: '',
        country: '',
        priorityCopy: false,
        date: null
      }
    ]);
  };
  const onChange = () => {
    setActiveStep(0);
  };
  const onDropAccepted = useCallback(async (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);
  const [filesDocuments, setFilesDocuments] = useState([]);
  const handleDocumentsFormData = (index, prop) => (e) => {
    const updatedArray = [...filesDocuments];
    updatedArray[index][prop] = e.target.value;
    setFilesDocuments(updatedArray);
  };
  const handleRemoveDocuments = (index) => {
    setFilesDocuments([
      ...filesDocuments.slice(0, index),
      ...filesDocuments.slice(index + 1, filesDocuments.length)
    ]);
  };
  const onDropRejected = () => {
    setAlertMessage(MESSAGE_LIMIT_FILE);
  };
  return {
    file,
    activeStep,
    skipped,
    steps,
    areasList,
    legalFiguresList,
    alertMessage,
    errors,
    registrationData,
    clientsData,
    clients,
    offices,
    invoicingEntitiesList,
    holdersList,
    holdersData,
    typeRecipent,
    emails,
    classes,
    emailsCC,
    emailsCCO,
    countries,
    prioritiesData,
    filesDocuments,
    referenceJobArea,
    searchJobs,
    modalShow,
    editDivisional,
    handleForm,
    setFilesDocuments,
    handleDocumentsFormData,
    handleRemoveDocuments,
    setEmails,
    setEmailsCC,
    setEmailsCCO,
    handleRecipent,
    handleHolders,
    removeHolders,
    addHolder,
    addClient,
    addPriorities,
    removeClients,
    handleClients,
    setAlertMessage,
    init,
    onChange,
    isStepSkipped,
    handleNext,
    handleBack,
    handleReset,
    handleRegistrationData,
    handlePriorities,
    removePriorities,
    onDropAccepted,
    onDropRejected,
    getErrorValue,
    getErrorValueNull,
    getHelperText
  };
};

export default useRegistrationProcedure;
