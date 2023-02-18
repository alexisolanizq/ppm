import React from 'react';
import DivWidth from '@Component/common/div/DivWidth';
import Flex from '@Component/common/flex/Flex';
import TabsComponent from '@Component/common/tabs/Tabs';
import Text from '@Component/common/text/Text';
import { PROCEDURE_TABS, STATUS_EXTENDED_LIST } from '@Const/lists';
import Attached from '@Pages/generals/formalities/inventors/Attached';
import Information from '@Pages/generals/formalities/inventors/Information';
import Inventors from '@Pages/generals/formalities/inventors/Inventors';
import ProcedureFamily from '@Pages/generals/formalities/inventors/ProcedureFamily';
import Select from '@Component/common/select/Select';
import OptionPositive from '@Component/common/option/OptionPositive';
import OptionWarning from '@Component/common/option/OptionWarning';
import OptionNegative from '@Component/common/option/OptionNegative';

const ProcedureContent = ({
  procedure,
  handleChange,
  selectedTab,
  ProcedureRenewals,
  procedureParam,
  getProcedureRenewalById,
  setSelectedTab,
  handlePopover,
  handlePopoverClose,
  openPopover,
  open,
  popoverId
}) => (
  <DivWidth porcentage={100}>
    <Flex gap={20} align="center" className="mb-1">
      <Text isBig isPrimary isBold>
        {procedure?.procReference}
      </Text>
      <DivWidth porcentage={20}>
        <Select
          value={procedure?.status?.status}
          size="small"
          variant="standard"
          options={STATUS_EXTENDED_LIST}
          optionId="value"
          className="mb-0"
          // eslint-disable-next-line consistent-return
          render={(item) => {
            if (item.id === 1) return <OptionPositive text="Activo" />;
            if (item.id === 2) return <OptionWarning text="Suspenso" />;
            if (item.id === 3) return <OptionNegative text="Inactivo" />;
          }}
        />
      </DivWidth>
    </Flex>
    <Text isBold isBig>
      {procedure?.procedureManagementAction?.prmaName}
    </Text>
    <DivWidth porcentage={100} className="mb-3">
      <TabsComponent
        optionTabs={PROCEDURE_TABS}
        handleChange={handleChange}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </DivWidth>
    <DivWidth porcentage={100}>
      {selectedTab === 0 && (
        <Information
          ProcedureRenewals={ProcedureRenewals}
          procedureParam={procedureParam}
          data={procedure}
          handlePopover={handlePopover}
          handlePopoverClose={handlePopoverClose}
          openPopover={openPopover}
          open={open}
          popoverId={popoverId}
          getProcedureRenewalById={getProcedureRenewalById}
        />
      )}
      {selectedTab === 1 && <Inventors />}
      {selectedTab === 2 && <ProcedureFamily data={procedure} />}
      {selectedTab === 3 && <Attached data={procedure} />}
    </DivWidth>
  </DivWidth>
);

export default ProcedureContent;
