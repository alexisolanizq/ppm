import ButtonsFormClick from '@Component/common/button/ButtonsFormClick';
import Text from '@Component/common/text/Text';
import React from 'react';

const ImpiPaymentsAsignment = ({ onCancel }) => (
  <div className="text-center">
    <Text className="mb-4">
      Se asignará este listado a Administración con fecha{' '}
      <Text isSpan isPrimary isBold>15 oct 21</Text>
    </Text>
    <Text>¿Es correcto?</Text>
    <ButtonsFormClick onCancel={onCancel} />
  </div>
);

export default ImpiPaymentsAsignment;
