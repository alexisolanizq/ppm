import React from 'react';
import Actions from '../actions/Actions';
import GeneralsBreadcrumbs from '../breadcrumb/GeneralsBreadcrumbs';
import TitlePage from '../text/TitlePage';

const LayoutHeader = ({ isTitleFlex = false, title = '', titleCustom, prevLinks = [], actions = [] }) => (
  <>
    {isTitleFlex && <TitlePage className='pt-4'>{title}</TitlePage>}
    <div className="layout__header">
      <GeneralsBreadcrumbs titleCustom={titleCustom} title={title} prevLinks={prevLinks} />
      <Actions gap={16} actions={actions} />
    </div>
  </>
  
);

export default LayoutHeader;
