import { FIELDS_REQUIRED } from '@Const/const';
import React from 'react';
import TextError from './TextError';

const TextRequired = () => (
  <TextError className="mb-3" message={FIELDS_REQUIRED} />
);

export default TextRequired;
