import {
  ID_LANGUAGE,
  ID_CATALOG_CFDI,
  ID_CATALOG_REGIME,
  ID_CATALOG_WAY_PAY,
  ID_LANGUAGE_ENGLISH,
  ID_CATALOG_PAY_METHOD,
  ID_CATALOG_NATIONALITY,
  ID_CATALOG_PERSON_TYPE,
  ID_CATALOG_ARTICLE_TYPE,
  ID_CATALOG_CONCEPT_TYPE,
  ID_CATALOG_EXPIRATION_UNIT,
  ID_CATALOG_COUNTRY_ABBREVIATIONS
} from '@Const/const';
import { API_CATALOG_GENERICS } from '@Const/constUrls';
import { STORE_GENERICS } from '@Const/store';
import {
  setCfdi,
  setExpirationUnits,
  setNationalities,
  setPaymentMethods,
  setPersonTypes,
  setRegimes,
  setWayPays,
  setCountryAbbreviations,
  setTypesInvoicingConcepts,
  setTypesInvoicingConceptsEnglish,
  setConceptTypes
} from '@Redux/catalogs/genericsSlice';
import { useListadoService } from '@Services/useService';

const LANGUAGE_ID_GET = `?language_id=${ID_LANGUAGE}`;
const selectedLanguageIdGet = (id) => `?language_id=${id}`;

const useDefaultGenericsListadoService = ({
  id,
  onSaveList,
  listadoName,
  selectedLanguage = null
}) =>
  useListadoService({
    url: `${API_CATALOG_GENERICS}/${id}${
      selectedLanguage
        ? selectedLanguageIdGet(selectedLanguage)
        : LANGUAGE_ID_GET
    }`,
    store: STORE_GENERICS,
    onSaveList,
    listadoName
  });

export const useNationalitiesListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_NATIONALITY,
    listadoName: 'nationalities',
    onSaveList: setNationalities
  });

export const useExpirationUnitsListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_EXPIRATION_UNIT,
    onSaveList: setExpirationUnits,
    listadoName: 'expirationUnits'
  });

export const usePersonTypesListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_PERSON_TYPE,
    onSaveList: setPersonTypes,
    listadoName: 'personTypes'
  });

export const usePaymentMethodsListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_PAY_METHOD,
    onSaveList: setPaymentMethods,
    listadoName: 'paymentMethods'
  });

export const useRegimesListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_REGIME,
    onSaveList: setRegimes,
    listadoName: 'regimes'
  });

export const useCfdiListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_CFDI,
    onSaveList: setCfdi,
    listadoName: 'cfdi'
  });

export const useWayPaysListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_WAY_PAY,
    onSaveList: setWayPays,
    listadoName: 'wayPays'
  });

export const useCountryAbbreviationsListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_COUNTRY_ABBREVIATIONS,
    onSaveList: setCountryAbbreviations,
    listadoName: 'countryAbbreviations'
  });

export const useTypesInvoicingConceptsListadoService = (english = false) =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_ARTICLE_TYPE,
    onSaveList: english
      ? setTypesInvoicingConceptsEnglish
      : setTypesInvoicingConcepts,
    listadoName: english
      ? 'typesInvoicingConceptsEnglish'
      : 'typesInvoicingConcepts',
    ...(english && { selectedLanguage: ID_LANGUAGE_ENGLISH })
  });

export const useConceptTypeListadoService = () =>
  useDefaultGenericsListadoService({
    id: ID_CATALOG_CONCEPT_TYPE,
    onSaveList: setConceptTypes,
    listadoName: 'conceptTypes'
  });
