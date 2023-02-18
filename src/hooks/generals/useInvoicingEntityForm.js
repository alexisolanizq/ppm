import { useForm } from 'react-hook-form';

import {
  RFC_GENERIC,
  FIELD_REQUIRED,
  ID_CATALOG_CFDI,
  ID_CATALOG_REGIME,
  FOREIGN_RFC_GENERIC,
  ID_CATALOG_PERSON_TYPE,
  MUST_BE_TWELVE_CHARACTERS,
  MUST_BE_THIRTEEN_CHARACTERS
} from '@Const/const';
import {
  DB_CFDI_ID_G03,
  DB_COUNTRY_ID_MEXICO,
  DB_TYPE_PERSON_ID_PHYSICS
} from '@Const/db';

import {
  useCfdiListadoService,
  useRegimesListadoService,
  usePersonTypesListadoService
} from '@Services/generics/useGenericsService';
import { useCountriesLiestadoService } from '@Services/countries/useCountriesService';

const defaultValues = {
  bienId: null,
  bienFirstName: '',
  bienLastName: null,
  bienCodePostal: '',
  bienInnerNumber: null,
  bienTownship: null,
  bienColony: null,
  bienState: null,
  bienStatus: true,
  bienRfc: RFC_GENERIC,
  typePerson: {
    opcgId: DB_TYPE_PERSON_ID_PHYSICS,
    cagId: ID_CATALOG_PERSON_TYPE
  },
  regime: {
    cagId: ID_CATALOG_REGIME
  },
  cfdi: {
    opcgId: DB_CFDI_ID_G03,
    cagId: ID_CATALOG_CFDI
  },
  country: {
    counId: DB_COUNTRY_ID_MEXICO
  },
  billingEntityForeign: null,
  bienPurchaseOrder: '',
  isDefault: false
};

const useInvoicingEntityForm = ({ row }) => {
  const {
    watch,
    control,
    handleSubmit: handleSubmitEntity,
    setValue,
    getValues
  } = useForm({
    defaultValues: row ?? defaultValues
  });

  const [watchTypePerson, watchCountry] = watch([
    'typePerson.opcgId',
    'country.counId'
  ]);

  const isMain = getValues('isDefault');

  // validations
  const fieldRequired = { required: FIELD_REQUIRED };
  const rfcForeignRequired = {
    ...fieldRequired,
    minLength: { value: 12, message: MUST_BE_TWELVE_CHARACTERS },
    maxLength: { value: 12, message: MUST_BE_TWELVE_CHARACTERS }
  };
  const rfcRequired = {
    ...fieldRequired,
    minLength: { value: 13, message: MUST_BE_THIRTEEN_CHARACTERS },
    maxLength: { value: 13, message: MUST_BE_THIRTEEN_CHARACTERS }
  };

  const { data: cfdiOptions, isLoading: isLoadingCfdi } =
    useCfdiListadoService();
  const { data: regimeOptions, isLoading: isLoadingRegime } =
    useRegimesListadoService();
  const { data: countryOptions, isLoading: isLoadingCountry } =
    useCountriesLiestadoService();
  const { data: personTypeOptions, isLoading: isLoadingPersonType } =
    usePersonTypesListadoService();

  const onChangeCountry = (event) => {
    const {
      target: { value }
    } = event;

    if (value === DB_COUNTRY_ID_MEXICO) {
      setValue('bienRfc', RFC_GENERIC);
    } else {
      setValue('bienRfc', FOREIGN_RFC_GENERIC);
    }
  };

  const onChangeAddress = ({ target: { value } }) => {
    const {address} = value
    setValue('country.counId', address?.country.counId)
    setValue('bienCodePostal', address.addCodePostal)
    setValue('bienStreet', address.addStreet)
    setValue('bienOutsideNumber', address.addOutsideNumber)
    setValue('bienInnerNumber', address.addInnerNumber)
    setValue('bienColony', address.addColony)
    setValue('bienCity', address.addCity)
    setValue('bienTownship', address.addTownship)
    setValue('bienState', address.addState)
  }

  const isLoading =
    isLoadingCfdi || isLoadingRegime || isLoadingCountry || isLoadingPersonType;

  return {
    // form
    control,
    handleSubmitEntity,
    onChangeCountry,
    onChangeAddress,
    // watch
    watchCountry,
    watchTypePerson,
    // values
    rfcRequired,
    fieldRequired,
    rfcForeignRequired,
    isMain,
    // Redux
    personTypeOptions,
    regimeOptions,
    countryOptions,
    cfdiOptions,
    isLoading
  };
};

export default useInvoicingEntityForm;
