import DivWidth from '@Component/common/div/DivWidth';
import Flex from '@Component/common/flex/Flex';
import ImageAvatar from '@Component/common/image/ImageAvatar';
import LinkIconText from '@Component/common/link/LinkIconText';
import GeneralLayout from '@Component/layout/GeneralLayout';
import useUserDetail from '@Hooks/catalogs/useUserDetail';
import EditIcon from '@mui/icons-material/Edit';
import { WIDTH } from '@Const/styles';
import React from 'react';
import {
  getJobAreaMainName,
  getJobAreaName,
  getJobAreasSecondary,
  getNamesCorresponsibles,
  getNameUser
} from '@Utils/user';
import Text from '@Component/common/text/Text';
import TitleValue from '@Component/common/text/TitleValue';
import SelectActive from '@Component/common/select/SelectActive';
import ModalUserAudit from './ModalUserAudit';
import ModalUserPhaseProfile from './ModalUserPhaseProfile';

const UserDetail = () => {
  const {
    isLoading,
    prevLinks,
    user,
    onChangeStatus,
    actions,
    isLoadingMutation,
    modalPhases,
    modalUpdates,
    isSuccess
  } = useUserDetail();

  const jobAreasSecondary = getJobAreasSecondary(user?.jobAreaUsers);

  return (
    <>
      <ModalUserAudit
        usrId={user?.usrId}
        isShow={modalUpdates.isOpen}
        onClose={modalUpdates.closeModal}
      />
      <ModalUserPhaseProfile
        usrId={user?.usrId}
        isShow={modalPhases.isOpen}
        onCancel={modalPhases.closeModal}
        onClose={modalPhases.closeModal}
        onEnd={modalPhases.closeModal}
      />
      <GeneralLayout
        isHideTitle
        actions={actions}
        prevLinks={prevLinks}
        isLoading={isLoading}
        title={user?.usrName}
        maxWidth={WIDTH.small}
      >
        {isSuccess && (
          <Flex align="start" gap={50}>
            <DivWidth px={150}>
              <ImageAvatar className="mb-3" width={150} height={150} />
              <SelectActive
                value={user?.usrStatus}
                isLoading={isLoadingMutation}
                onChange={onChangeStatus}
              />
              <LinkIconText
                to="editar"
                icon={EditIcon}
                text="Modificar usuario"
              />
            </DivWidth>
            <DivWidth px="auto">
              <Text className="mb-4" isBig isBold>
                {getNameUser(user)}
              </Text>
              <TitleValue title="Área principal">
                {getJobAreaMainName(user?.jobAreaUsers)}
              </TitleValue>
              {jobAreasSecondary.length > 0 &&
                jobAreasSecondary.map((jobArea) => (
                  <TitleValue title="Área secundaria">
                    {getJobAreaName(jobArea)}
                  </TitleValue>
                ))}

              <TitleValue title="Correo PPM:">{user?.usrEmail}</TitleValue>
              <TitleValue title="Nivel de permiso:">
                {user?.level?.levIdHierarchy}
              </TitleValue>
              <TitleValue title="Corresponsable(s)">
                {getNamesCorresponsibles(user?.coresponsibles)}
              </TitleValue>
            </DivWidth>
          </Flex>
        )}
      </GeneralLayout>
    </>
  );
};

export default UserDetail;
