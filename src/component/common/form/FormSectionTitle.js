import React from 'react';
import Text from '../text/Text';

const FormSectionTitle = ({
  title = '',
  isCenter = false,
  isPrimary = false
}) => (
  <Text className="mb-3" isBig isCenter={isCenter} isPrimary={isPrimary}>
    {title}
  </Text>
);

export default FormSectionTitle;
