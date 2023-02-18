import {
  ID_CATALOG_AGENT,
  ID_CATALOG_EXPIRATION_UNIT,
  ID_CATALOG_NATIONALITY,
  ID_CATALOG_PERSON_TYPE,
  ID_OPTION_ASOCIATE_CATALOG_AGENT,
  ID_OPTION_CLIENT_CATALOG_AGENT,
  ID_OPTION_PROVIDER_CATALOG_AGENT
} from '@Const/const';
import {
  DB_COUNTRY_ID_MEXICO,
  DB_LANGUAGE_ID_SPANISH,
  DB_NATIONALITIE_ID_MEXICAN
} from '@Const/db';
import { FILES_SOURCE_AGENT } from '@Const/files';
import { useBankService } from '@Services/banks/useBankService';
import {
  useAddClientService,
  useUpdateClientService
} from '@Services/client/useClientService';
import { useCountriesActiveListService } from '@Services/countries/useCountriesService';
import { useCurrencyActiveService } from '@Services/currency/useCurrencyService';
import { useAddFiles } from '@Services/files/useFilesService';
import {
  useExpirationUnitsListadoService,
  useNationalitiesListadoService,
  usePaymentMethodsListadoService,
  usePersonTypesListadoService,
  useWayPaysListadoService
} from '@Services/generics/useGenericsService';
import { useLanguageActiveListService } from '@Services/languages/useLanguageService';
import { AGENT_BANKS_DEFAULT, fillBanks, filterBanks } from '@Utils/client';
import { showToastError } from '@Utils/toast';
import { isValid } from '@Utils/values';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

const DEFAULT_VALUES = {
  ageAdmStatus: 'cumplido',
  ageId: null,
  typePerson: {
    cagId: ID_CATALOG_PERSON_TYPE,
    opcgId: 1
  },
  nationality: {
    cagId: ID_CATALOG_NATIONALITY
  },
  agentTelephones: [{ agteNumber: '' }],
  ageStatus: true,
  agentInvoicings: [{ aginDiscount: 0 }],
  agentAdms: [
    {
      chargeableInvoiceTerm: {
        cagId: ID_CATALOG_EXPIRATION_UNIT
      },
      uncollectibleInvoiceTerm: {
        cagId: ID_CATALOG_EXPIRATION_UNIT
      }
    }
  ],
  agentBanks: AGENT_BANKS_DEFAULT
};

const useClientForm = ({ onEnd = () => {}, row = null, isUpdate = false }) => {
  // form
  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES,
    mode: 'all'
  });
  const { fields: telephones, append: addTelephone } = useFieldArray({
    control,
    name: 'agentTelephones'
  });

  const { fields: banksField } = useFieldArray({
    control,
    name: 'agentBanks'
  });

  useEffect(() => {
    if (isValid(row)) {
      const { agentRoles, agentTelephones, agentBanks } = row;
      agentRoles.forEach(({ role: { opcgId } }) => {
        if (opcgId === ID_OPTION_CLIENT_CATALOG_AGENT) {
          setValue('isClient', true);
        }
        if (opcgId === ID_OPTION_ASOCIATE_CATALOG_AGENT) {
          setValue('isPartner', true);
        }
        if (opcgId === ID_OPTION_PROVIDER_CATALOG_AGENT) {
          setValue('isProvider', true);
        }
      });
      if (agentTelephones.length === 0) {
        setValue('agentTelephones', [{ agteNumber: '' }]);
      }
      setValue('agentBanks', fillBanks(agentBanks));
    }
  }, [row]);

  // apis
  const { data: countries, isLoading: isLoadingCountries } =
    useCountriesActiveListService();
  const { data: nationalities, isLoading: isLoadingNationalities } =
    useNationalitiesListadoService();
  const { data: languages, isLoading: isLoadingLanguages } =
    useLanguageActiveListService();
  const { data: currencies, isLoading: isLoadingCurrencies } =
    useCurrencyActiveService();
  const { data: expirationUnits, isLoading: isLoadingExpirationUnits } =
    useExpirationUnitsListadoService();
  const { data: banks, isLoading: isLoadingBanks } = useBankService();
  const { data: personTypes, isLoading: isLoadingPersonTypes } =
    usePersonTypesListadoService();
  const { data: paymentMethods, isLoading: isLoadingPaymentMethods } =
    usePaymentMethodsListadoService();
  const { data: wayPays, isLoading: isLoadingWayPays } =
    useWayPaysListadoService();

  const addClientMutation = useAddClientService();
  const updateClientMutation = useUpdateClientService(row?.ageId);
  const fileMutation = useAddFiles()

  // functions
  const onSubmit = async ({
    isClient,
    isPartner,
    isProvider,
    ageId,
    agentBanks,
    imagen,
    ...data
  }) => {
    const agentRoles = [];
    if (isClient) {
      agentRoles.push({
        ageId,
        role: {
          opcgId: ID_OPTION_CLIENT_CATALOG_AGENT,
          cagId: ID_CATALOG_AGENT
        }
      });
    }

    if (isPartner) {
      agentRoles.push({
        ageId,
        role: {
          opcgId: ID_OPTION_ASOCIATE_CATALOG_AGENT,
          cagId: ID_CATALOG_AGENT
        }
      });
    }

    if (isProvider) {
      agentRoles.push({
        ageId,
        role: {
          opcgId: ID_OPTION_PROVIDER_CATALOG_AGENT,
          cagId: ID_CATALOG_AGENT
        }
      });
    }

    if (agentRoles.length === 0) {
      showToastError(
        'Selecciona al menos un rol: Cliente, asociado, proveedor'
      );
      return;
    }

    const body = {
      ...data,
      agentRoles,
      ageId,
      agentBanks: agentBanks.filter(filterBanks)
    };

    let response = null
    if (!isUpdate) {
      response = await addClientMutation.mutateAsync(body);
    } else {
      response = await updateClientMutation.mutateAsync(body);
    }

    if (imagen) {
      await fileMutation.onSaveFile({
        name: imagen.name,
        file: imagen,
        source: FILES_SOURCE_AGENT,
        sourceId: response.ageId
      });
    }

    onEnd(response);
  };

  const changeCountry = ({ target: { value } }) => {
    if (Number(value) === DB_COUNTRY_ID_MEXICO) {
      setValue('nationality', DB_NATIONALITIE_ID_MEXICAN);
      setValue('language.lanId', DB_LANGUAGE_ID_SPANISH);

      telephones.forEach((item, index) => {
        setValue(`agentTelephones.${index}.agteCountryCode`, '+52');
      });
    }
  };

  const isLoading =
    isLoadingCountries ||
    isLoadingNationalities ||
    isLoadingLanguages ||
    isLoadingCurrencies ||
    isLoadingExpirationUnits ||
    isLoadingBanks ||
    isLoadingPersonTypes ||
    isLoadingPaymentMethods ||
    isLoadingWayPays;

  const isLoadingMutation =
    addClientMutation.isLoading || updateClientMutation.isLoading;

  return {
    // form
    watch,
    control,
    handleSubmit,
    onSubmit,
    errors,

    // telephones
    telephones,
    addTelephone,

    // banks
    banksField,

    // catalogs
    countries,
    nationalities,
    languages,
    currencies,
    expirationUnits,
    banks,
    personTypes,
    paymentMethods,
    wayPays,

    // actions
    changeCountry,

    isLoading,
    isLoadingMutation
  };
};

export default useClientForm;
