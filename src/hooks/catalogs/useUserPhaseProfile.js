import { useUserProcedurePhaseAdd, useUserProcedurePhasesListServices } from '@Services/userProcedure/useUserProcedureService';
import {
  useUserRowGetService,
} from '@Services/user/useUserService';
import { useEffect, useState } from 'react';

const useUserPhaseProfile = ({ onEnd, usrId }) => {
  const [areas, setAreas] = useState([]);

  const {
    data: user,
    isFetching: isLoadingUser,
    isSuccess
  } = useUserRowGetService(usrId);

  const {
    data: seleccionados,
    isFetching: isLoadingSeleccionados,
    isSuccess: isSuccessSeleccionados
  } = useUserProcedurePhasesListServices(usrId, isSuccess);

  const mutation = useUserProcedurePhaseAdd();
  
  useEffect(() => {
    if (isSuccessSeleccionados) {
      if (user.jobAreaUsers && user.jobAreaUsers.length > 0) {
        setAreas(
          user.jobAreaUsers.map((item) => {
            let value = [];
            const area = seleccionados?.areas.find(
              (f) => f.joauId === item.joauId
            );
            if (area) {
              value = area.phases.map((m) => m.jappId);
            }
            return {
              ...item,
              value
            };
          })
        );
      }
    }
  }, [isLoadingSeleccionados]);

  const onSubmit = async () => {
    const body = {
      usrId,
      areas: areas
        .map((area) => ({
          joauId: area.joauId,
          phases: area.value.map((v) => ({ jappId: v }))
        }))
    };
    await mutation.mutateAsync(body)
    onEnd()
  };

  const onChangeCheckbox = (value, joauId) => {
    setAreas(
      areas.map((item) => ({
        ...item,
        value: item.joauId === joauId ? value : item.value
      }))
    );
  };

  const isLoading = isLoadingUser || isLoadingSeleccionados;
  const isLoadingMutation = mutation.isLoading;

  return {
    isLoading,
    areas,
    onChangeCheckbox,
    onSubmit,
    isLoadingMutation
  };
};

export default useUserPhaseProfile;
