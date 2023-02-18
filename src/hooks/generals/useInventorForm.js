/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-compare */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  useAddInventorService,
  useAddMultipleInventorsService,
  useUpdateInventorService
} from '@Services/procedure/inventors/useInventorService';
import { useNationalitiesListadoService } from '@Services/generics/useGenericsService';
import { getValuesById, isValid, isValidString } from '@Utils/values';
import { ID_CATALOG_NATIONALITY } from '@Const/const';
import { showToastError } from '@Utils/toast';
import { removeAccents } from '@Utils/text';

const useInventorForm = ({
  row,
  isUpdate = false,
  onEnd,
  procedureParam = ''
}) => {
  const [entriesWithSuccess, setEntriesWithSuccess] = useState([]);
  const [entriesWithErrors, setEntriesWithErrors] = useState([]);

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      clientId: 1,
      procId: row?.procId || procedureParam,
      inveId: row?.inveId,
      inveName: row?.inveName,
      inveAddress: row?.inveAddress || null,
      nationalityCagId: ID_CATALOG_NATIONALITY,
      nationalityOpcgId: row?.nationalityOpcgId,
      nationalityName: row?.nationalityName || null,
      nationalityAbbreviation: row?.nationalityAbbreviation || null,
      multipleInventorsDesigners: []
    }
  });

  const { data: nationalities, isLoading: isLoadingNationalitites } =
    useNationalitiesListadoService();

  const addInventorMutation = useAddInventorService();
  const updateInventorMutation = useUpdateInventorService(row?.inveId);
  const addMultipleInventorsMutation = useAddMultipleInventorsService();

  const onPreeProccess = (body) => {
    const correct = [];
    const incorrect = [];
    const inventors = body?.multipleInventorsDesigners.split(/\s*;\s*/);
    let inventorName = '';
    inventors.map((item, index) => {
      const inventor = item?.trim().split(',');
      const nationality = nationalities.find(
        (nat) =>
          nat?.description.toLowerCase() ===
            inventor[2]?.trim().toLowerCase() ||
          nat?.value.toLowerCase() === inventor[2]?.trim().toLowerCase()
      );

      !isValid(nationality) &&
        isValid(inventor[2]) &&
        isValidString(inventor[2]) &&
        showToastError(`La nacionalidad ${inventor[2]} no fue encontrada.`);
        
        const payload = {
          clientId: index + 1,
          procId: Number(procedureParam),
          inveName: inventor[0].length > 0 ? inventor[0].trim() : null,
          inveAddress: isValidString(inventor[1]) ? inventor[1]?.trim() : null,
        nationalityOpcgId: nationality?.idOptionCatGeneric ?? null,
        nationalityCagId: body.nationalityCagId,
        nationalityName:
        nationality?.description ||
          (isValidString(inventor[2]?.trim()) ? inventor[2]?.trim() : null),
        nationalityAbbreviation: nationality?.value
      };

      if (!isValid(payload.nationalityOpcgId)) {
        payload.nationalityCagId = null;
      }
      
      if (removeAccents(payload.inveName) === removeAccents(inventorName)) {
        showToastError(`El nombre "${inventorName}" ya fue ingresado.`);
        return incorrect.push(payload);
      }

      inventorName = payload.inveName;

      if (
        (isValid(payload.inveName) &&
          isValid(payload.nationalityOpcgId) &&
          !isValid(payload.inveAddress)) ||
        (isValid(payload.inveName) &&
          (isValid(payload.nationalityOpcgId) ||
            !isValid(payload.nationalityName)))
      ) {
        return correct.push(payload);
      }

      if (
        payload.inveAddress !== undefined ||
        (!isValid(payload.nationalityOpcgId) &&
          payload.inveAddress !== undefined)
      ) {
        return incorrect.push(payload);
      }

      return payload;
    });
    setEntriesWithSuccess(isValid(correct) > 0 && correct);
    setEntriesWithErrors(isValid(incorrect) > 0 && incorrect);
  };
  const onSubmit = async (body) => {
    if (isUpdate) {
      await updateInventorMutation.mutateAsync(body);
    } else if (body.clientId === 2) {
      addMultipleInventorsMutation.mutateAsync(entriesWithSuccess);
    } else {
      const nation = getValuesById(
        nationalities,
        'idOptionCatGeneric',
        body.nationalityOpcgId
      );
      const payload = {
        ...body,
        inveName: body.inveName?.trim(),
        inveAddress: body.inveAddress?.trim(),
        nationalityName: nation.description,
        nationalityAbbreviation: nation.value
      };
      await addInventorMutation.mutateAsync(payload);
    }
    onEnd();
  };
  const isLoading = isLoadingNationalitites;
  const isLoadingMutation =
    addInventorMutation.isLoading ||
    addMultipleInventorsMutation.isLoading ||
    updateInventorMutation?.isLoading;

  return {
    setEntriesWithSuccess,
    setEntriesWithErrors,
    entriesWithSuccess,
    entriesWithErrors,
    control,
    handleSubmit,
    errors,
    onSubmit,
    watch,
    row,
    onPreeProccess,
    nationalities,
    isLoading,
    isLoadingMutation
  };
};

export default useInventorForm;
