import React from 'react';
import '@Assets/styles/toolbarGeneral.css'
import Actions from '../actions/Actions';

const ToolbarGeneral = ({ actions = [], children }) => (
    <div className="toolbarGeneral">
      {children}
      {actions.length > 0 && <Actions actions={actions}/>}
    </div>
  );

export default ToolbarGeneral;
