import React from "react";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = (path) => {
    if (!path) return;
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    onSort(sortColumn);
  };

  const renderSortIcon = (column) => {
    if (!column.path) return null;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <span className="fas fa-sort-up"></span>;
    return <span className="fas fa-sort-down"></span>;
  };

  return (
    <thead className="table-header">
      <tr>
        {columns &&
          columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => raiseSort(column.path)}
            >
              <div>
                {" "}
                {column.label} &nbsp; &nbsp; {renderSortIcon(column)}
              </div>
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
