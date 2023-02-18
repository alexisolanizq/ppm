import IconTextAction from '@Component/common/icon/IconTextAction';
import LinkIconText from '@Component/common/link/LinkIconText';
import { PAGE_TITLE_EMPLOYEE } from '@Const/catalogs';
import { LINK_CATALOG_EMPLOYEES } from '@Const/links';
import useModal from '@Hooks/common/useModal';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import UpdateIcon from '@mui/icons-material/Update';
import {
  useEmployeesDetailGetService,
  useEmployeeUpdateService
} from '@Services/employees/useEmployeesServices';
import { useUserByEmployee } from '@Services/user/useUserService';
import React from 'react';
import { useParams } from 'react-router';

const useEmployeesDetail = () => {
  const { empId } = useParams();

  const modalUpdates = useModal();
  const modalPhases = useModal();

  const {
    data: employee,
    isLoading: isLoadingEmployee,
    isSuccess
  } = useEmployeesDetailGetService(empId);
  const { data: user, isLoading: isLoadingUser } = useUserByEmployee(empId);
  const updateMutation = useEmployeeUpdateService(empId);

  const onChangeStatus = ({ target: { value } }) => {
    employee.empStatus = value
    const body = {
      ...employee,
      empStatus: value
    };
    updateMutation.mutate(body);
  };

  const prevLinks = [
    { link: LINK_CATALOG_EMPLOYEES, nombre: PAGE_TITLE_EMPLOYEE }
  ];

  let actions = [];
  if (user) {
    actions = [
      <IconTextAction
        icon={UpdateIcon}
        text="Actualizaciones del sistema"
        onClick={modalUpdates.openModal}
      />
    ];
  } else if (employee?.empSystemAccess) {
    actions = [
      <LinkIconText
        to="agregar-usuario"
        icon={AssignmentIndIcon}
        text="Agregar usuario"
      />
    ];
  }

  const isLoading = isLoadingEmployee || isLoadingUser;
  const isLoadingMutation = updateMutation.isLoading;

  return {
    prevLinks,
    actions,
    isLoading,
    employee,
    onChangeStatus,
    isLoadingMutation,
    modalUpdates,
    user,
    modalPhases,
    isSuccess
  };
};

export default useEmployeesDetail;
