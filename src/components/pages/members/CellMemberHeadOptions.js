import React, { useState, useEffect, Fragment } from "react";
import { Button } from "react-bootstrap";
// import Select from "../../shared/FormComponents/Select";
import { CELL_STATUS, CHURCH_STATUS } from "../../../constants/appConstants";

const CellMemberHeadOptions = ({
  onApply,
  cellStatus,
  churchStatus,
  onClose,
  raiseSort,
  sortPath,
}) => {
  const [filter, setFilter] = useState({
    cellStatus: "",
    churchStatus: "",
  });

  useEffect(() => {
    setFilter({
      cellStatus,
      churchStatus,
    });
  }, [cellStatus, churchStatus]);

  const handleSelect = (key, value) => setFilter({ ...filter, [key]: value });

  const handleClose = () => {
    setFilter((p) => ({
      cellStatus,
      churchStatus,
    }));

    onClose();
  };

  const handleAppy = () => {
    onApply({ ...filter });
    handleClose();
  };

  const handleReset = () => {
    setFilter((p) => ({
      cellStatus: "",
      churchStatus: "",
    }));
  };

  const renderListOptions = (options = [], current, title, key) => {
    return (
      <div className="member-options-list">
        <h6 className="option-title">{title}</h6>
        <ul className="option-list">
          {options.map((item) => (
            <li
              className={
                item.value === current ? "option-item active" : "option-item"
              }
              key={item.id}
              onClick={() => handleSelect(key, item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Fragment>
      {/* <div className="member-options-sort">
        <h6 className="option-title">Sort by </h6>
        <Select
          options={MEMBER_SORT_PATHS}
          value={sortPath.path}
          onChange={raiseSort}
          size="sm"
        />
      </div> */}
      <div className="member-options-filter">
        {renderListOptions(
          CELL_STATUS,
          filter.cellStatus,
          "Cell Status",
          "cellStatus"
        )}
        {renderListOptions(
          CHURCH_STATUS,
          filter.churchStatus,
          "Church Status",
          "churchStatus"
        )}
        <div className="options-button">
          <Button size="sm" variant="outline-primary" onClick={handleReset}>
            Reset
          </Button>
          <Button size="sm" onClick={handleAppy}>
            Apply
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default CellMemberHeadOptions;
