import { useForm } from 'react-hook-form';

import {
  useInvoicingConceptAddService,
  useInvoicingConceptUpdateService
} from '@Services/invoicingConcepts/useInvoicingConceptsService';
import { useAreaActiveListService } from '@Services/areas/useAreaService';

import useModal from '@Hooks/common/useModal';
import {
  useConceptTypeListadoService,
  useTypesInvoicingConceptsListadoService
} from '@Services/generics/useGenericsService';

const DEFAULT_VALUES = {
  incoStatus: true
};

const useInvoicingConceptsForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const [watchMultiple] = watch(['multiple']);

  const {
    isOpen: isOpenAreas,
    openModal: openModalAreas,
    closeModal: closeModalAreas
  } = useModal();

  // api
  const { data: areas, isLoadingAreas } = useAreaActiveListService();
  const {
    data: typesInvoicingConcepts,
    isLoading: isLoadingTypesInvoicingConcepts
  } = useTypesInvoicingConceptsListadoService();
  const {
    data: typesInvoicingConceptsEnglish,
    isLoading: isLoadingTypesInvoicingConceptsEnglish
  } = useTypesInvoicingConceptsListadoService(true);
  const { data: conceptTypes, isLoading: isLoadingConceptTypes } =
    useConceptTypeListadoService();

  const mutation = useInvoicingConceptAddService(onEnd);
  const mutationUpdate = useInvoicingConceptUpdateService(row?.autId, onEnd);

  // functions
  const onSubmit = async (data) => {
    const payload = {
      ...data
    };

    if (isUpdate) {
      await mutationUpdate.mutateAsync(payload);
    } else {
      await mutation.mutateAsync(payload);
    }
  };

  const onChangeArticleType = (event) => {
    const {
      target: { value }
    } = event;

    setValue('articleTypeEng', value);
  };

  const isLoading =
    isLoadingAreas ||
    isLoadingConceptTypes ||
    isLoadingTypesInvoicingConcepts ||
    isLoadingTypesInvoicingConceptsEnglish;
  const isLoadingMutation = mutation.isLoading || mutationUpdate.isLoading;

  return {
    // form
    control,
    handleSubmit,
    onSubmit,
    errors,
    // watch
    watchMultiple,
    isLoading,
    isLoadingMutation,
    // catalogs
    areas,
    typesInvoicingConcepts,
    typesInvoicingConceptsEnglish,
    conceptTypes,
    isOpenAreas,
    closeModalAreas,
    openModalAreas,
    onChangeArticleType
  };
};

export default useInvoicingConceptsForm;
