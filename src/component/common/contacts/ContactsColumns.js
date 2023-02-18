import React from 'react';
import Flex from '../flex/Flex';
import IconEdit from '../icon/IconEdit';
import IconRemove from '../icon/IconRemove';

export const ContactHeaders = ['Nombre', 'Email', 'Acciones'];

export const ContactColumns = ({ onEdit, onRemove }) => [
  {
    field: 'nombre',
    render: (item) =>
      `${item?.contact.conName} ${item?.contact.conFirstName} ${item?.contact.conLastName}`
  },
  {
    field: 'email',
    render: (item) => `${item?.contact.conEmail}`
  },
  {
    field: 'acciones',
    render: (_item, index) => (
      <Flex justify="center" gap={8}>
        {console.log(_item, index)}
        <IconEdit onClick={() => onEdit(index)} />
        <IconRemove onClick={() => onRemove(index)} />
      </Flex>
    )
  }
];
