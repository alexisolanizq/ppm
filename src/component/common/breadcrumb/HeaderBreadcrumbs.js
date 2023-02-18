import React from 'react';
import { isString } from 'lodash';
import { Box, Link } from '@mui/material';
import MBreadcrumbs from '../material-extend/MBreadcrumbs';

export default function HeaderBreadcrumbs({
  links,
  action,
  moreLink = '' || [],
  _sx,
  ...other
}) {
  return (
    <Box className="mb-4 mt-3">
      <Box className="d-flex align-items-center">
        <Box className="flex-grow-1 ">
          <MBreadcrumbs links={links} {...other} />
        </Box>

        {action && <Box className="flex-shrink-1">{action}</Box>}
      </Box>

      <Box className="mt-3">
        {isString(moreLink) ? (
          <Link href={moreLink} target="_blank" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink.map((href) => (
            <Link
              noWrap
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              className="d-table"
            >
              {href}
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
}
