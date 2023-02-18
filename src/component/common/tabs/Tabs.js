import React from 'react';
import { Tab, Tabs } from '@mui/material';
import TextError from '../text/TextError';

const TabsComponent = ({
  optionTabs,
  selectedTab,
  handleChange = () => {},
  label = 'Botones de navegación'
}) => (
  <Tabs
    onChange={handleChange}
    value={selectedTab}
    textColor="primary"
    indicatorColor="primary"
    aria-label={label}
  >
    {optionTabs.length > 0 ? (
      optionTabs.map((tab) => (
        <Tab
          key={tab.id}
          className="fw-semibold"
          label={tab.label}
          value={tab.value}
          id={tab.label}
        />
      ))
    ) : (
      <TextError message="Sin opciones para mostrar" />
    )}
  </Tabs>
);

export default TabsComponent;
