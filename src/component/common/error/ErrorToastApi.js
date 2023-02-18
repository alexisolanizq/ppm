import React from 'react';

const ErrorToastApi = ({ title, detail }) => (
  <div>
    <b>{title}</b>
    {detail && <div style={{ whiteSpace: 'pre-wrap' }}>{detail}</div>}
  </div>
);

export default ErrorToastApi;
