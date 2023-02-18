import { useForm } from 'react-hook-form';
import {
  useAddJobAreaProcedurePhaseService,
  useUpdateJobAreaProcedurePhaseService
} from '@Services/phases/useJobAreaProcedurePhaseService';
import { useProcedurePhaseActiveListService } from '@Services/phases/usePhaseService';
import { useAreaActiveListService } from '@Services/areas/useAreaService';
import useModal from '@Hooks/common/useModal';
import { getValuesById } from '@Utils/values';

const DEFAULT_VALUES = {
  jappStatus: true
};

const useJobAreProcedurePhaseForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    isOpen: isAreaOpen,
    closeModal: closeAreaModal,
    openModal: openAreaModal
  } = useModal();

  const {
    isOpen: isPhaseOpen,
    closeModal: closePhaseModal,
    openModal: openPhaseModal
  } = useModal();

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  //* Api
  const { data: areas, isLoading: isAreaLoading } = useAreaActiveListService();
  const { data: procedurePhases, isLoading: isProcedurePhasesLoading } =
    useProcedurePhaseActiveListService();

  const addJobAreaProcedurePhaseMutation = useAddJobAreaProcedurePhaseService();
  const updateJobAreaPhaseMutation = useUpdateJobAreaProcedurePhaseService(
    row?.jappId
  );

  const onSubmit = async (body) => {
    const areaById = getValuesById(areas, 'joaId', body.joaId);
    const procedurePhaseById = getValuesById(
      procedurePhases,
      'prphId',
      body.prphId
    );
    const payload = {
      jappId: body.jappId || null,
      joaId: areaById.joaId,
      joaName: areaById.joaName,
      prphId: procedurePhaseById.prphId,
      prphName: procedurePhaseById.prphName,
      jappStatus: body.jappStatus
    };
    if (isUpdate) {
      await updateJobAreaPhaseMutation.mutateAsync(payload);
    } else {
      await addJobAreaProcedurePhaseMutation.mutateAsync(payload);
    }

    onEnd();
  };

  const isLoading = isAreaLoading || isProcedurePhasesLoading;
  const isLoadingMutation =
    addJobAreaProcedurePhaseMutation.isLoading ||
    updateJobAreaPhaseMutation.isLoading;

  return {
    watch,
    areas,
    procedurePhases,
    isLoading,
    control,
    handleSubmit,
    errors,
    onSubmit,
    isLoadingMutation,

    //* Areas Modal
    isAreaOpen,
    openAreaModal,
    closeAreaModal,

    //* Phases Modal
    isPhaseOpen,
    openPhaseModal,
    closePhaseModal
  };
};

export default useJobAreProcedurePhaseForm;
