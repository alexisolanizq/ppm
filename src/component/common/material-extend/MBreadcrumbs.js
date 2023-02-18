import React from 'react';
import { last } from 'lodash';
// material
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Box, Link, Breadcrumbs } from '@mui/material';

// ----------------------------------------------------------------------

const Separator = <span>&gt;</span>;
function LinkItem({ link }) {
  const { href, name, icon } = link;
  return (
    <Link
      to={href}
      key={name}
      variant="body2"
      component={RouterLink}
      className="lh-2 d-flex align-items-center thirt-gray-color text-decoration-none fw-semibold"
    >
      {icon && <Box className="icon-BreadCrumb">{icon}</Box>}
      {name}
    </Link>
  );
}

export default function MBreadcrumbs({ links, activeLast = false, ...other }) {
  const currentLink = last(links).name;

  const listDefault = links.map((link) => (
    <LinkItem key={link.name} link={link} />
  ));
  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          className="color-green overflow-hidden whitespace-nowrap text-overflow-ellipsis fw-semibold max-w-260"
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <Breadcrumbs separator={Separator} {...other}>
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
}
