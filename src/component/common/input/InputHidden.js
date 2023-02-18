import React from 'react';

const InputHidden = ({ name = '', value }) => (
  <input type="hidden" name={name} value={value} />
);

export default InputHidden;
