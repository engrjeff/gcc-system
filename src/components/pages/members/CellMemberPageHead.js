import React, { useState } from "react";
import Search from "../../shared/FormComponents/Search";
import Select from "../../shared/FormComponents/Select";
import { IconButton, Pip } from "../../shared/Misc/MiscComponents";
import CellMemberHeadOptions from "./CellMemberHeadOptions";

const sortPaths = [
  { id: 1, value: "name", label: "Name" },
  { id: 2, value: "profile.cellStatus", label: "Cell Status" },
  { id: 3, value: "profile.churchStatus", label: "Church Status" },
];

const CellMemberPageHead = (props) => {
  const {
    count,
    onSort,
    onSearch,
    onFilter,
    filters,
    sortPath,
    searchQuery,
  } = props;

  const [showFilters, setShowFilters] = useState(false);

  const raiseSort = ({ currentTarget: input }) => {
    const path = input.value;
    if (!path) return;
    if (sortPath.path === path) {
      sortPath.order = sortPath.order === "asc" ? "desc" : "asc";
    } else {
      sortPath.path = path;
      sortPath.order = "asc";
    }

    onSort({ ...sortPath });
  };

  const renderCount = () => {
    if (searchQuery) return `Search result(s) : ${count}`;
    if (filters.cellStatus || filters.churchStatus)
      return `Filter result(s) : ${count}`;
    return `Total : ${count}`;
  };

  const handleApplyFilter = (filter) => {
    onFilter(filter);
  };

  const handleFilterRemove = (key) => {
    onFilter({ ...filters, [key]: "" });
  };

  return (
    <div className="member-head-container">
      <div className="member-head">
        <div className="member-head-text">
          <h6 className="member-head-title">Cell Members List</h6>
          <small className="member-head-count">{renderCount()}</small>
        </div>
        <div className="member-sortby">
          <label className="form-label">Sort by </label>
          <Select
            options={sortPaths}
            value={sortPath.path}
            onChange={raiseSort}
            size="sm"
          />
        </div>
        <div className="member-searchbox">
          <Search
            placeholder="Search by name"
            onSearch={onSearch}
            value={searchQuery}
            size="sm"
          />
        </div>
        <div className="member-menu-toggler">
          <IconButton
            icon="ellipsis-v"
            onClick={() => setShowFilters((s) => !s)}
          />
          {showFilters && (
            <CellMemberHeadOptions
              onApply={handleApplyFilter}
              onClose={() => setShowFilters(false)}
              cellStatus={filters.cellStatus}
              churchStatus={filters.churchStatus}
            />
          )}
        </div>
      </div>
      <div className="member-filters">
        {(filters.cellStatus || filters.churchStatus) && (
          <h6 className="member-filter-text">Filters</h6>
        )}
        <Pip
          text={filters.cellStatus}
          onDismiss={() => handleFilterRemove("cellStatus")}
        />
        <Pip
          text={filters.churchStatus}
          onDismiss={() => handleFilterRemove("churchStatus")}
        />
      </div>
    </div>
  );
};

export default CellMemberPageHead;
