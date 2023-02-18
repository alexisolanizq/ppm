import { PAGE_TITLE_USERS } from '@Const/catalogs';
import { LINK_CATALOG_USER } from '@Const/links';
import {
  useUserRowGetService,
  useUserUpdateService
} from '@Services/user/useUserService';
import UpdateIcon from '@mui/icons-material/Update';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useParams } from 'react-router';
import React from 'react';
import useModal from '@Hooks/common/useModal';
import IconTextAction from '@Component/common/icon/IconTextAction';

const useUserDetail = () => {
  const { userId } = useParams();
  const modalUpdates = useModal();
  const modalPhases = useModal()

  const { data: user, isSuccess, isLoading } = useUserRowGetService(userId);
  const updateUserMutation = useUserUpdateService(userId, 'status');

  const onChangeStatus = ({ target: { value } }) => {
    updateUserMutation.mutate({ usrStatus: value, usrId: userId });
  };

  const prevLinks = [{ link: LINK_CATALOG_USER, nombre: PAGE_TITLE_USERS }];

  const actions = [
    <IconTextAction icon={AssignmentIcon} text="Perfil de fase" onClick={modalPhases.openModal} />,
    <IconTextAction icon={UpdateIcon}  text="Actualizaciones del sistema" onClick={modalUpdates.openModal} />
  ];

  const isLoadingMutation = updateUserMutation.isLoading;

  return {
    prevLinks,
    user,
    isLoading,
    onChangeStatus,
    actions,
    isLoadingMutation,
    modalUpdates,
    modalPhases,
    isSuccess
  };
};

export default useUserDetail;
