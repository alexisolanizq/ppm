import LayoutHeader from '@Component/common/layout/LayoutHeader';
import LayoutTitle from '@Component/common/layout/LayoutTitle';
import Linear from '@Component/common/loader/Linear';
import SidebarComponent from '@Component/common/sidebar/Sidebar';
import React from 'react';

const GeneralLayout = ({
  title = '',
  children,
  prevLinks = [],
  actions = [],
  maxWidth = 2000,
  isLoading = false,
  isTitleFlex = false,
  isHideTitle = false,
  titleCustom,
}) => {
  const style = { maxWidth };
  if (isLoading) return <Linear />
  return (
    <div className="container layout">
      {(prevLinks.length > 0 || actions.length > 0 || isTitleFlex) && (
        <LayoutHeader isTitleFlex={isTitleFlex} actions={actions} prevLinks={prevLinks} titleCustom={titleCustom} title={title}/>
      )}
      {(!isHideTitle && !isTitleFlex) && <LayoutTitle>{title}</LayoutTitle>}
      <div className={`m-auto ${isHideTitle ? 'pt-4' : ''}`} style={style}>
        {children}
      </div>
    </div>

  );
};

const Sidebar = ({ children, sidebar = [] }) => (
  <div className="layout__content">
    {sidebar.length > 0 && <SidebarComponent sidebar={sidebar} />}
    <div className="layout__body">{children}</div>
  </div>
);
GeneralLayout.Sidebar = Sidebar

export default GeneralLayout;
