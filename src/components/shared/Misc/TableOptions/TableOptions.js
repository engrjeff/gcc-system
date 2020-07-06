import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { IconButton } from "../MiscComponents";
import Search from "../../FormComponents/Search";
import FloatingOptionWrapper from "../FloatingOptionWrapper";
import "./tableoptions.css";

const PageSizes = [5, 10, 20, 30];

const TableOptions = ({
  currentPageSize,
  onPageSizeChange,
  onSearch,
  searchQuery,
  filterOptions,
  onFilterSelect,
  currentFilter,
}) => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  return (
    <div className="table-options">
      <p className="table-options-title">System Users |</p>
      <div className="table-options-filter">
        <IconButton
          icon="filter"
          active={showFilterOptions}
          onClick={() => setShowFilterOptions(true)}
        />
        <FloatingOptionWrapper
          shown={showFilterOptions}
          onClick={() => setShowFilterOptions(false)}
        >
          {filterOptions.map((item) => (
            <div
              className={
                item.value === currentFilter
                  ? "table-options-filter-items active"
                  : "table-options-filter-items"
              }
              key={item.label}
              onClick={() => onFilterSelect(item.value)}
            >
              {item.label}
            </div>
          ))}
        </FloatingOptionWrapper>
      </div>
      <Form.Group className="table-options-entries">
        <Form.Label>Show</Form.Label>
        <Form.Control
          as="select"
          onChange={onPageSizeChange}
          value={currentPageSize}
          name="pageSize"
          size="sm"
        >
          {PageSizes.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Form.Control>
        <Form.Label>{currentPageSize > 1 ? "entries" : "entry"}</Form.Label>
      </Form.Group>
      <div className="table-options-search">
        <Search
          name="user-table-search"
          onSearch={onSearch}
          value={searchQuery}
        />
      </div>
    </div>
  );
};

export default TableOptions;
