import React from 'react';
import { Link } from 'react-router-dom';

const GeneralsBreadcrumbs = ({ prevLinks = [], title = '', titleCustom }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      {prevLinks.map((item) => (
        <li key={`linkLi${item.link}`} className="breadcrumb-item">
          <Link to={item.link}>{item.nombre}</Link>
        </li>
      ))}
      <li className="breadcrumb-item active" aria-current="page">
        {titleCustom || title}
      </li>
    </ol>
  </nav>
);

export default GeneralsBreadcrumbs;
