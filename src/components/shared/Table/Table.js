import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./table.css";

const Table = ({ columns, data, sortColumn, onSort }) => {
  return (
    <div className="table-container">
      <div className="table-responsive app-table">
        <table className="table sticky" cellPadding="10">
          <caption className="visually-hidden"></caption>
          <TableHeader
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody data={data} columns={columns} />
        </table>
      </div>
    </div>
  );
};

export default Table;
