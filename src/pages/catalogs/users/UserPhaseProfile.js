import ButtonsFormClick from '@Component/common/button/ButtonsFormClick';
import MultiCheckboxPhases from '@Component/common/checkbox/MultiCheckboxPhases';
import Flex from '@Component/common/flex/Flex';
import Form from '@Component/common/form/Form';
import Text from '@Component/common/text/Text';
import { SIZES } from '@Const/styles';
import useUserPhaseProfile from '@Hooks/catalogs/useUserPhaseProfile';
import React from 'react';

const UserPhaseProfile = ({ onCancel, onEnd, usrId }) => {
  const { isLoading, areas, onChangeCheckbox, onSubmit, isLoadingMutation  } = useUserPhaseProfile({ onEnd, usrId });

  return (
    <Form isHideTextRequired isLoading={isLoading}>
      <Flex gap={SIZES.TWENTYFOUR} justify="center" align="start">
        {areas.map((area) => (
          <div key={`area-multickeckbox-${area.joauId}`}>
            <Text isRegular isBold>
              Área {area.joauMainArea ? 'Principal' : 'Secundaria'}: {area.jobArea.joaName}
            </Text>
            <Text isPrimary>Fases</Text>
            <MultiCheckboxPhases onChange={(value) => onChangeCheckbox(value, area.joauId)} joaId={area.jobArea.joaId} value={area.value}/>
          </div>
        ))}
      </Flex>
      <ButtonsFormClick isLoading={isLoadingMutation} onCancel={onCancel} onClick={onSubmit} />
    </Form>
  );
};

export default UserPhaseProfile;
