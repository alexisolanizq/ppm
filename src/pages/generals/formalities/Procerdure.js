import React, { useEffect } from 'react';
import useProcedure from '@Hooks/generals/useProcedure';
import GeneralLayout from '@Component/layout/GeneralLayout';
import Flex from '@Component/common/flex/Flex';
import DivWidth from '@Component/common/div/DivWidth';
import ListMenuSidebar from '@Component/common/listMenu/ListMenuSidebar';
import ProcedureContent from './ProcedureContent';

const Procerdure = () => {
  const {
    Procedure,
    selectedTab,
    handleChange,
    getProcedure,
    setSelectedTab,
    setProcedureId,
    getProcedureRenewalById,
    procedureParam,
    ProcedureRenewals,
    menuItems,

    handlePopover,
    openPopover,
    handlePopoverClose,
    open,
    popoverId
  } = useProcedure();
  useEffect(() => {
    setProcedureId(procedureParam);
    getProcedure(procedureParam);
  }, []);

  return (
    <GeneralLayout title={Procedure && Procedure?.procReference} isHideTitle>
      <DivWidth porcentage={100}>
        <Flex align="start">
          <ListMenuSidebar
            hasHeader
            headerTitle="MENÚ TRÁMITE"
            menuItems={menuItems}
          />
          <ProcedureContent
            procedure={Procedure}
            handleChange={handleChange}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            ProcedureRenewals={ProcedureRenewals}
            procedureParam={procedureParam}
            getProcedureRenewalById={getProcedureRenewalById}
            handlePopover={handlePopover}
            handlePopoverClose={handlePopoverClose}
            openPopover={openPopover}
            open={open}
            popoverId={popoverId}
          />
        </Flex>
      </DivWidth>
    </GeneralLayout>
  );
};

export default Procerdure;
