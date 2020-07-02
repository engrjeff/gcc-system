import React from "react";

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return item[column.path];
  };
  const createKey = (column) => {
    return column.path || column.key;
  };

  return (
    <tbody className="table-body">
      {data &&
        data.map((item) => (
          <tr key={item._id || item.id}>
            {columns.map((column) => (
              <td
                key={createKey(column)}
                className={`${
                  column.disabled && column.disabled(item) ? "disabled" : ""
                }`}
              >
                {renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
