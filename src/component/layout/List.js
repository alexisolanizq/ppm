import GeneralsBreadcrumbs from '@Component/common/breadcrumb/GeneralsBreadcrumbs';
import React from 'react'

const List = ({
  prevLinks = [],
  title,
  children,
}) => (
  <div className="container">
    <div className="my-3 p-3">
      <GeneralsBreadcrumbs prevLinks={prevLinks} title={title}/>
      <div className='mt-4'>{children}</div>
    </div>
  </div>
);

export default List;
