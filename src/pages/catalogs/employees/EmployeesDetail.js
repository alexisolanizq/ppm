import DivWidth from '@Component/common/div/DivWidth';
import Flex from '@Component/common/flex/Flex';
import ImageApi from '@Component/common/image/ImageApi';
import LinkIconText from '@Component/common/link/LinkIconText';
import SelectActive from '@Component/common/select/SelectActive';
import Text from '@Component/common/text/Text';
import TitleValue from '@Component/common/text/TitleValue';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { FILES_SOURCE_EMPLOYEE } from '@Const/files';
import { WIDTH } from '@Const/styles';
import useEmployeesDetail from '@Hooks/catalogs/useEmployeesDetail';
import EditIcon from '@mui/icons-material/Edit';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { getFullNameEmployee } from '@Utils/employee';
import React from 'react';
import { formatDate } from '@Utils/date';
import {
  getJobAreaMainName,
  getJobAreaName,
  getJobAreasSecondary,
  getNamesCorresponsibles
} from '@Utils/user';
import { getAdressText } from '@Utils/address';
import Card from '@Component/common/card/Card';
import IconTextAction from '@Component/common/icon/IconTextAction';
import { LINK_CATALOG_USER } from '@Const/links';
import ModalUserAudit from '../users/ModalUserAudit';
import ModalUserPhaseProfile from '../users/ModalUserPhaseProfile';

const EmployeesDetail = () => {
  const {
    prevLinks,
    actions,
    employee,
    isLoading,
    onChangeStatus,
    isLoadingMutation,
    user,
    modalUpdates,
    modalPhases,
    isSuccess
  } = useEmployeesDetail();

  const jobAreasSecondary = getJobAreasSecondary(user?.jobAreaUsers);

  return (
    <>
      {user && (
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
        </>
      )}
      <GeneralLayout
        maxWidth={WIDTH.form}
        isHideTitle
        isLoading={isLoading}
        title={isSuccess && getFullNameEmployee(employee)}
        actions={actions}
        prevLinks={prevLinks}
      >
        {isSuccess && (
          <Flex align="start" gap={50}>
            <DivWidth px={150}>
              <ImageApi
                source={FILES_SOURCE_EMPLOYEE}
                id={employee.empId}
                className="mb-3"
                width={150}
                height={150}
              />
              <SelectActive
                value={employee?.empStatus}
                isLoading={isLoadingMutation}
                onChange={onChangeStatus}
              />
              <LinkIconText
                to="editar"
                icon={EditIcon}
                text="Editar empleado"
              />
            </DivWidth>
            <DivWidth px="auto">
              <Text className="mb-4" isBig isBold>
                {getFullNameEmployee(employee)}
              </Text>
              {user && (
                <>
                  <TitleValue title="Área principal">
                    {getJobAreaMainName(user?.jobAreaUsers)}
                  </TitleValue>
                  {jobAreasSecondary.length > 0 &&
                    jobAreasSecondary.map((jobArea) => (
                      <TitleValue title="Área secundaria">
                        {getJobAreaName(jobArea)}
                      </TitleValue>
                    ))}
                </>
              )}
              <TitleValue title="Nacimiento">
                {formatDate(employee?.empBirthDate)}
              </TitleValue>
              <TitleValue title="Sexo">
                {employee?.empGender === 'M' ? 'Masculino' : 'Femenino'}
              </TitleValue>
              <TitleValue title="CURP">
                <Text isSpan isPrimary>
                  {employee?.empCurp}
                </Text>
              </TitleValue>
              {employee?.employeeAddress && (
                <TitleValue title="Domicilio" widthContent={300}>
                  {getAdressText(employee.employeeAddress.address)}
                </TitleValue>
              )}
              {employee.contactTelephonesEmployees &&
                employee.contactTelephonesEmployees.map((telephone) => (
                  <TitleValue title="Teléfono">
                    {telephone.coteTelephone}
                  </TitleValue>
                ))}
              <TitleValue title="Correo">{employee.empEmail}</TitleValue>
              <TitleValue title="RFC">
                <Text isSpan isPrimary>
                  {employee.empRfc}
                </Text>
              </TitleValue>
              <TitleValue title="Fecha de ingreso">
                {formatDate(employee?.empAdmissionDate)}
              </TitleValue>
              <TitleValue title="Acceso al sistema">
                {employee?.empSystemAccess ? 'Sí' : 'No'}
              </TitleValue>
              {user && (
                <Card isNotBoxShadow>
                  <Card.Header>
                    <Flex justify="between">
                      <LinkIconText
                        to={`${LINK_CATALOG_USER}/${user?.usrId}/editar`}
                        icon={EditIcon}
                        text="Editar usuario"
                      />
                      <IconTextAction
                        onClick={modalPhases.openModal}
                        icon={AssignmentIcon}
                        text="Perfil de fase"
                      />
                    </Flex>
                  </Card.Header>
                  <Card.Body>
                    <Text isRegular className="text-center mb-3">
                      Usuario
                    </Text>
                    <TitleValue title="Correo PPM">{user.usrEmail}</TitleValue>
                    <TitleValue title="Nivel de permiso">
                      {user.level.levIdHierarchy}
                    </TitleValue>
                    <TitleValue title="Corresponsable(s)">
                      {getNamesCorresponsibles(user?.coresponsibles)}
                    </TitleValue>
                  </Card.Body>
                </Card>
              )}
            </DivWidth>
          </Flex>
        )}
      </GeneralLayout>
    </>
  );
};

export default EmployeesDetail;
