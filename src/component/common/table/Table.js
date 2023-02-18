import React from 'react';
import Loading from '../loader/Loading';

const Table = ({ children, className = '', isLoading = false }) => (
  <div className={`table__custom ${className}`}>
    {isLoading ? <Loading /> : <table>{children}</table>}
  </div>
);

const Header = ({ tableName = '', headers = [] }) => (
  <thead>
    <tr>
      {headers.map((item, index) => (
        <th key={`${tableName}-th-${index}`}>{item}</th>
      ))}
    </tr>
  </thead>
);
Table.Header = Header;

const Body = ({ children }) => <tbody>{children}</tbody>;
Table.Body = Body;

const Tr = ({ children, ...props }) => <tr {...props}>{children}</tr>;
Table.Tr = Tr;

const Td = ({ children, ...props }) => <td {...props}>{children}</td>;
Table.Td = Td;

export default Table;
