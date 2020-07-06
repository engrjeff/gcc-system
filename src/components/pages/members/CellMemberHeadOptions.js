import React, { useState, Fragment } from "react";
import { Button } from "react-bootstrap";
import { CELL_STATUS, CHURCH_STATUS } from "../../../constants/appConstants";
import { IconButton } from "../../shared/Misc/MiscComponents";

const CellMemberHeadOptions = ({
  onApply,
  cellStatus,
  churchStatus,
  onClose,
}) => {
  const [filter, setFilter] = useState({
    cellStatus,
    churchStatus,
  });

  const handleSelect = (key, value) => setFilter({ ...filter, [key]: value });

  const handleAppy = () => {
    onApply({ ...filter });
    onClose();
  };

  const handleReset = () => {
    setFilter((p) => ({
      cellStatus: "",
      churchStatus: "",
    }));

    onApply({ ...filter });
  };

  const renderListOptions = (options = [], current, title, key) => {
    return (
      <Fragment>
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
      </Fragment>
    );
  };

  return (
    <div className="float-options show member-options">
      <div className="member-options-filter">
        <div className="option-head">
          <h6>Filter Options</h6>
          <IconButton icon="times" onClick={onClose} />
        </div>
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
          <Button size="sm" onClick={handleReset}>
            Reset
          </Button>
          <Button size="sm" onClick={handleAppy}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CellMemberHeadOptions;
