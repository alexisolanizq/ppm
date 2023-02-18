import React from 'react';
import IconAdd from '../icon/IconAdd';
import Table from './Table';

const TableGeneral = ({ list = [], columns = [], headers = [], onAdd }) => (
  <div className="tablegeneral">
    {onAdd && <IconAdd className="tablegeneral__iconadd" onClick={onAdd} />}
    <Table>
      <Table.Header headers={headers} />
      <Table.Body>
        {list && list.length > 0 ? (
          <>
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
          </>
        ) : (
          <Table.Tr>
            <Table.Td colSpan={headers.length} className="py-3 text-center" />
          </Table.Tr>
        )}
      </Table.Body>
    </Table>
  </div>
);

export default TableGeneral;
