import React, { useState } from "react";
import CellMemberList from "./CellMemberList";
import CellMemberPageHead from "./CellMemberPageHead";
import { Wrapper } from "../../shared/Misc/MiscComponents";
import { sort } from "../../../helpers/utils";

const CellMemberPageBody = ({ members, user }) => {
  const [sortPath, setSortPath] = useState({ path: "name", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    cellStatus: "",
    churchStatus: "",
  });

  const handleSort = (path) => setSortPath(path);

  const handleSearch = (query) => {
    setFilters((prev) => ({
      cellStatus: "",
      churchStatus: "",
    }));
    setSearchQuery(query);
  };

  const handleFilter = (filters) => {
    setSearchQuery("");
    setFilters(filters);
  };

  const getDisplayData = () => {
    if (!members) return [];
    const data = [...members];

    let filtered = data;

    const { cellStatus, churchStatus } = filters;

    if (searchQuery)
      filtered = data.filter((m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (cellStatus && churchStatus)
      filtered = data.filter(
        (m) =>
          m.profile &&
          m.profile.cellStatus === cellStatus &&
          m.profile.churchStatus === churchStatus
      );
    else if (cellStatus && !churchStatus)
      filtered = data.filter(
        (m) => m.profile && m.profile.cellStatus === cellStatus
      );
    else if (churchStatus && !cellStatus)
      filtered = data.filter(
        (m) => m.profile && m.profile.churchStatus === churchStatus
      );

    const sorted = sort(filtered, sortPath.path, sortPath.order);

    return { data: sorted, count: sorted.length };
  };

  return (
    <div className="member-page-body">
      <Wrapper m="my-3" p="p-3">
        <CellMemberPageHead
          count={getDisplayData().count}
          onSort={handleSort}
          sortPath={sortPath}
          onSearch={handleSearch}
          searchQuery={searchQuery}
          onFilter={handleFilter}
          filters={filters}
        />
        <CellMemberList members={getDisplayData().data} user={user} />
      </Wrapper>
    </div>
  );
};

CellMemberPageBody.defaultProps = {
  members: [],
};

export default CellMemberPageBody;
