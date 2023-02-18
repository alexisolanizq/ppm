import { FIELD_REQUIRED, ID_CATALOG_STATUS, ID_OPTION_IN_PROCESS_CATALOG_STATUS, USER_DEFAULT } from "@Const/const";
import { useAddImpiPaymentsListsList, useAddImpiPaymentsService } from "@Services/impiPayments/useImpiPaymentsService";
import usePaymentTypeService from "@Services/paymentType/usePaymentTypeService";
import { findById } from "@Utils/array";
import { useForm } from "react-hook-form";

const DEFAULT_VALUES = {
  procId: null,
  impaPhysicalPaymentDto: 1
};

const useImpiPaymentsForm = ({ row, onEnd }) => {
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  // call apis
  const { data: paymentTypes } = usePaymentTypeService();
  const addMutation = useAddImpiPaymentsService();
  const addListMutation = useAddImpiPaymentsListsList(() => {
    reset();
    onEnd();
  });

  // validations
  const fieldRequired = { required: FIELD_REQUIRED };

  // functions
  const onSubmit = async ({
    procId,
    impaPaymentDate,
    impaPhysicalPayment,
    paymentType,
    articles
  }) => {
    const paymentTypeSelected = findById(
      paymentTypes,
      paymentType,
      'idOptionCatGeneric'
    );

    const body = {
      procedure: {
        procId
      },
      impaPaymentDate,
      paymentType: {
        opcgId: paymentType,
        cagId: paymentTypeSelected.idCatGeneric
      },
      impaPhysicalPayment: impaPhysicalPayment === 1,
      paymentStatusDto: {
        opcgId: ID_OPTION_IN_PROCESS_CATALOG_STATUS,
        cagId: ID_CATALOG_STATUS
      },
      user: {
        usrId: USER_DEFAULT
      }
    };

    const response = await addMutation.mutateAsync(body);

    const listArticles = articles.map(({ pariId, cantidad, paymentRight }) => ({
      impaId: response.impaId, // es el que genero con el mutation,
      pariId,
      implDescription: paymentRight.pariArticleName,
      implQuantity: cantidad,
      implCost: parseFloat(paymentRight.pariPrice * cantidad)
    }));

    addListMutation.mutate(listArticles);
  };

  return {
    // values
    control,
    register,
    errors,
    fieldRequired,
    paymentTypes,
    isLoading: addMutation.isLoading || addListMutation.isLoading,

    // functions
    handleSubmit,
    onSubmit
  };
};

export default useImpiPaymentsForm;
