import React, { useState } from 'react';
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader
} from '@mui/material';
import Text from '@Component/common/text/Text';

const ListMenuSidebar = ({
  hasHeader = false,
  headerTitle = '',
  component = 'div',
  menuItems = [],
  orientation = 'vertical',
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const getButtonList = (mustShow) =>
    mustShow && (open > 0 ? <ExpandMore /> : <ChevronRight />);

  return (
    <Box className="boxList-custom-1">
      <List
        orientation={orientation}
        variant="scrollable"
        className="list-custom-1"
        sx={{
          minWidth: '240px',
          borderRight: '1px solid #3333'
        }}
        subheader={
          hasHeader && (
            <ListSubheader component={component}>
              <Text isBold isPrimary>
                {headerTitle}
              </Text>
            </ListSubheader>
          )
        }
        {...props}
      >
        {hasHeader ? <Divider /> : null}
        {menuItems?.length > 0 ? (
          menuItems.map((item, index) => (
            <div key={index}>
              <ListItemButton
                className="fw-bold"
                onClick={item?.subItems?.length > 0 ? handleClick : null}
              >
                {getButtonList(!!item?.subItems?.length)}

                <ListItemText primary={item.name} />
              </ListItemButton>
              {item?.subItems?.length > 0
                ? item?.subItems?.map((subItem) => (
                    <Collapse
                      key={subItem?.name}
                      in={open}
                      timeout="auto"
                      unmountOnExit
                    >
                      <ListItemButton
                        className="pl-3"
                        onClick={subItem?.action}
                      >
                        <ListItemText primary={subItem?.name} />
                      </ListItemButton>
                    </Collapse>
                  ))
                : null}
            </div>
          ))
        ) : (
          <Text isBold isGray>
            Sin opciones para mostrar
          </Text>
        )}
      </List>
    </Box>
  );
};

export default ListMenuSidebar;
