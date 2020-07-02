import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead className="table-header">
      <tr>
        {columns &&
          columns.map((column) => (
            <th key={column.path || column.key}>{column.label}</th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
