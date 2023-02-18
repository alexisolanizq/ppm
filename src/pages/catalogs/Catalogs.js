import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import CatalogsMenu from '@Pages/catalogs/CatalogsMenu';
import GeneralLayout from '@Component/layout/GeneralLayout';
import Card from '@Component/common/card/Card';
import Text from '@Component/common/text/Text';

const Catalogs = () => (
  <GeneralLayout title="Catálogos">
    <div className="catalogs">
      {CatalogsMenu.map(({ id, name, icon, to }) => (
        <Link key={`link-catalogs-${id}`} to={to}>
          <Card>
            <Card.Header className="text-center color-primary">
              <FeatherIcon icon={icon} size="35" />
            </Card.Header>
            <Card.Body className="d-flex align-items-center justify-content-center flex-grow-1">
              <Text isCenter isGray>
                {name}
              </Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  </GeneralLayout>
);

export default Catalogs;
