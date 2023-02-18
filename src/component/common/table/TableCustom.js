import React from 'react';

import Table from './Table';
import Flex from '../flex/Flex';

const TableCustom = ({ list = [], columns = [], headers = [], children }) => {
  if (list.length === 0) return <div />;

  return (
    <>
      <Flex justify="end" className="table__custom-files-border">
        {children}
      </Flex>
      <Table className="table__custom-border">
        <Table.Header headers={headers} />
        <Table.Body>
          {list.map((item, index) => (
            <Table.Tr key={`tr-entitites-component-${index}`}>
              {columns.map((column, _i) => (
                <Table.Td key={`column-table-${_i}`}>
                  {column.render
                    ? column.render(item, index)
                    : item[column.field]}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default TableCustom;
