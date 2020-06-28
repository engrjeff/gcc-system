import React, { useState } from "react";
import {
  getCalendarDates,
  getPrevMonth,
  getNextMonth,
  formatDate,
  DAYS_OF_WEEK,
  MONTHS,
} from "./helpers";
import "./datepicker.css";

const DatePicker = ({
  currentDate = new Date(),
  onChange,
  onClose,
  separator = "/",
  showTodayBtn = false,
  disableFuture = true,
}) => {
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

  const [displayMonths, setDisplayMonths] = useState(false);
  const [displayYears, setDisplayYears] = useState(false);

  const goToPrevMonth = () => {
    const { prevMonth, prevYear } = getPrevMonth(
      new Date(selectedYear, selectedMonth)
    );
    setSelectedMonth(prevMonth);
    setSelectedYear(prevYear);
    setSelectedDay(1);
  };

  const goToNextMonth = () => {
    let { nextMonth, nextYear } = getNextMonth(
      new Date(selectedYear, selectedMonth)
    );

    if (disableFuture) {
      const now = new Date();
      if (nextYear > now.getFullYear()) {
        nextYear = now.getFullYear();
      }
    }
    setSelectedMonth(nextMonth);
    setSelectedYear(nextYear);
    setSelectedDay(1);
  };

  const getRightArrowClass = () => {
    if (!disableFuture) return "";
    const now = new Date();
    if (
      selectedYear === now.getFullYear() &&
      selectedMonth === now.getMonth()
    ) {
      return "disabled";
    }
  };

  const getDownArrowClass = () => {
    if (!disableFuture) return "";
    const now = new Date();
    if (selectedYear === now.getFullYear()) {
      return "disabled";
    }
  };

  const renderDaysOfWeek = () => {
    return DAYS_OF_WEEK.map((d, i) => (
      <div key={i} className="day-of-week-cell">
        {d.short}
      </div>
    ));
  };

  const renderCalendarDates = () => {
    const getCellClass = (day) => {
      if (!disableFuture) return "";
      const now = new Date();
      if (!(now.getFullYear() === selectedYear)) return "";
      return +day > now.getDate() &&
        now.getFullYear() === selectedYear &&
        now.getMonth() === selectedMonth
        ? "excluded"
        : "";
    };

    const calendarDates = getCalendarDates(
      new Date(selectedYear, selectedMonth, selectedDay)
    );
    return calendarDates.map((d, i) => (
      <div
        key={i}
        className={`date-cell ${d.excluded ? "excluded" : ""} ${
          d.value === selectedDay ? "current" : ""
        } ${getCellClass(d.value)}`}
        onClick={() => onDayChange(d.value)}
      >
        {d.value}
      </div>
    ));
  };

  const renderMonthsView = () => {
    const getCellClass = (month) => {
      if (!disableFuture) return "";
      const now = new Date();
      if (!(now.getFullYear() === selectedYear)) return "";
      return +month > now.getMonth() ? "excluded" : "";
    };

    return MONTHS.map((m, i) => (
      <div
        key={i}
        className={`date-month-cell ${
          i === selectedMonth ? "current" : ""
        } ${getCellClass(i)}`}
        onClick={() => onMonthChange(i)}
      >
        {m.short}
      </div>
    ));
  };

  const renderYearsView = () => {
    // want a 3x3 grid of years, the selected year being the center
    const years = [];
    for (let y = selectedYear - 4; y <= selectedYear + 4; y++) {
      years.push(y);
    }

    const getCellClass = (y) => {
      if (!disableFuture) return "";
      return +y > new Date().getFullYear() ? "excluded" : "";
    };

    return years.map((y, i) => (
      <div
        key={i}
        className={`date-year-cell ${
          y === selectedYear ? "current" : ""
        } ${getCellClass(y)}`}
        onClick={() => {
          onYearChange(y);
        }}
      >
        {y}
      </div>
    ));
  };

  const onDayChange = (day) => {
    setSelectedDay(day);
  };

  const onViewChange = (current) => {
    setSelectedDay(1);
    if (current === "months") {
      setDisplayMonths(true);
      setDisplayYears(false);
    } else if (current === "years") {
      if (disableFuture) {
        const now = new Date();
        if (
          selectedMonth > now.getMonth() &&
          selectedYear === now.getFullYear()
        )
          setSelectedMonth(0); // back to january
      }
      setDisplayMonths(false);
      setDisplayYears(true);
    }
  };

  const onMonthChange = (month) => {
    setSelectedMonth(month);
    setDisplayMonths(false);
  };

  const onYearChange = (year) => {
    setSelectedYear(year);
    setDisplayYears(false);
  };

  const onTodayClick = () => {
    setSelectedYear(new Date().getFullYear());
    setSelectedMonth(new Date().getMonth());
    setSelectedDay(new Date().getDate());
  };

  const onOkClick = () => {
    const dateSelection = formatDate(
      new Date(selectedYear, selectedMonth, selectedDay),
      separator
    );

    onChange(dateSelection);
    onClose();
  };

  const renderDatePicker = () => {
    return (
      <div className="date-picker">
        <div className="date-picker-head">
          {!displayYears && !displayMonths && (
            <>
              <div
                className="date-picker-head-arrow-left"
                onClick={goToPrevMonth}
              >
                <span className="fas fa-chevron-left"></span>
              </div>
              <div
                className={`date-picker-head-arrow-right ${getRightArrowClass()}`}
                onClick={goToNextMonth}
              >
                <span className="fas fa-chevron-right"></span>
              </div>
            </>
          )}
          <div className="date-picker-head-current">
            <span onClick={() => onViewChange("months")}>
              {MONTHS[selectedMonth]["short"]}
            </span>
            <span onClick={() => onViewChange("years")}>{selectedYear}</span>
          </div>

          {displayYears && (
            <>
              <div
                className="date-picker-head-arrow-up"
                onClick={() => setSelectedYear((prev) => prev - 1)}
              >
                <span className="fas fa-chevron-up"></span>
              </div>
              <div
                className={`date-picker-head-arrow-down ${getDownArrowClass()}`}
                onClick={() => setSelectedYear((prev) => prev + 1)}
              >
                <span className="fas fa-chevron-down"></span>
              </div>
            </>
          )}
        </div>
        {!displayMonths && !displayYears && (
          <>
            <div className="date-picker-day-of-week">{renderDaysOfWeek()}</div>
            <div className="date-picker-body">{renderCalendarDates()}</div>
          </>
        )}
        {displayMonths && (
          <div className="date-picker-months">{renderMonthsView()}</div>
        )}
        {displayYears && (
          <div className="date-picker-years">
            <div className="date-picker-years-content">{renderYearsView()}</div>
          </div>
        )}
        {!displayMonths && !displayYears && (
          <div className="date-picker-buttons">
            <div className="btn btn-primary btn-sm" onClick={onClose}>
              Cancel
            </div>
            <div className="btn btn-primary btn-sm" onClick={onOkClick}>
              Set
            </div>
            {showTodayBtn && (
              <div className="btn btn-primary btn-sm" onClick={onTodayClick}>
                Today
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return <div className="date-picker-container">{renderDatePicker()}</div>;
};

export default DatePicker;
