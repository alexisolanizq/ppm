import React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { last } from 'lodash';

const CreateLinkItem = ({ link }) => {
  const { to, name, icon = null } = link;
  return (
    <Link
      className="fw-bold text-decoration-none green-color"
      sx={{ fontFamily: 'Avenir', fontSize: '14px' }}
      to={to}
      key={name}
      component={RouterLink}
    >
      {icon && <Box>{icon}</Box>} {name}
    </Link>
  );
};

const CatalogsBreadcrumbs = ({ links, activeLast = false, ...other }) => {
  const currentLink = last(links).name;

  const listDefault = links.map((link) => (
    <CreateLinkItem key={link.name} link={link} />
  ));

  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <CreateLinkItem link={link} />
      ) : (
        <Typography
          sx={{ fontFamily: 'Avenir', fontSize: '14px' }}
          className="text-muted fw-bold"
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <Breadcrumbs separator="/" aria-label="breadcrumb" {...other}>
      <Link
        className="fw-bold text-decoration-none green-color"
        sx={{ fontFamily: 'Avenir', fontSize: '14px' }}
        to="/catalogos"
        component={RouterLink}
      >
        Catálogos
      </Link>
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
};

export default CatalogsBreadcrumbs;
