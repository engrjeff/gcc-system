// days of the week and their short names
export const DAYS_OF_WEEK = [
  { long: "Sunday", short: "Su" },
  { long: "Monday", short: "Mo" },
  { long: "Tuesday", short: "Tu" },
  { long: "Wednesday", short: "We" },
  { long: "Thursday", short: "Th" },
  { long: "Friday", short: "Fr" },
  { long: "Saturday", short: "Sa" },
];

// months and their short names
export const MONTHS = [
  { long: "January", short: "Jan" },
  { long: "February", short: "Feb" },
  { long: "March", short: "Mar" },
  { long: "April", short: "Apr" },
  { long: "May", short: "May" },
  { long: "June", short: "Jun" },
  { long: "July", short: "Jul" },
  { long: "August", short: "Aug" },
  { long: "September", short: "Sep" },
  { long: "October", short: "Oct" },
  { long: "November", short: "Nov" },
  { long: "December", short: "Dec" },
];

// Always show 6 weeks (42 days)
export const WEEKS_IN_DISPLAY = 6;

export const isValidDate = (date) => {
  if (Object.prototype.toString.call(date) !== "[object Date]") return false;
  if (isNaN(date.getTime())) return false;
  return true;
};

export const getFirstDayOfDate = (date = new Date()) => {
  if (!isValidDate(date)) return;
  return new Date(date.getFullYear(), date.getMonth()).getDay();
};

export const getCurrentMonth = (date = new Date()) => {
  if (!isValidDate(date)) return;
  const month = date.getMonth();
  const year = date.getFullYear();
  return { month, year };
};
export const getPrevMonth = (date = new Date()) => {
  if (!isValidDate(date)) return;
  const { month, year } = getCurrentMonth(date);
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  return { prevMonth, prevYear };
};

export const getNextMonth = (date = new Date()) => {
  if (!isValidDate(date)) return;
  const { month, year } = getCurrentMonth(date);
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  return { nextMonth, nextYear };
};

export const getCalendarDates = (date = new Date()) => {
  if (!isValidDate(date)) return;

  const { month, year } = getCurrentMonth(date);
  const { prevMonth, prevYear } = getPrevMonth(date);
  // const { nextMonth, nextYear } = getNextMonth(date);

  const prevDays = daysInMonthYear(prevMonth, prevYear);
  const currentDays = daysInMonthYear(month, year);
  // const nextDays = daysInMonthYear(nextMonth, nextYear);

  const currentFirstDay = getFirstDayOfDate(date);

  const TOTAL_DAYS = WEEKS_IN_DISPLAY * 7;

  let calendarDisplay = [];

  // prev month dates
  for (let i = 1; i <= currentFirstDay; i++) {
    calendarDisplay.push({
      excluded: true,
      value: prevDays - currentFirstDay + i,
    });
  }

  // current month dates
  for (let i = 1; i <= currentDays; i++) {
    calendarDisplay.push({ excluded: false, value: i });
  }
  const remaining = TOTAL_DAYS - currentDays - currentFirstDay + 1;
  // next month dates
  for (let i = 1; i < remaining; i++) {
    calendarDisplay.push({ excluded: true, value: i });
  }

  return calendarDisplay;
};
export const daysInMonthYear = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

// getCalendarDates(new Date(2020, 6, 23));

export const getPrevMonthYearDisplay = (date, type = "short") => {
  if (!isValidDate(date)) return;
  // const { prevMonth, prevYear } = getPrevMonth(date);
  // return formatMonthYearDisplay(prevMonth, prevYear, type);
};

export const getNextMonthYearDisplay = (date, type = "short") => {
  if (!isValidDate(date)) return;
  // const { nextMonth, nextYear } = getNextMonth(date);
  // return formatMonthYearDisplay(nextMonth, nextYear, type);
};

export const formatMonthYearDisplay = (date, type = "short") => {
  return `${MONTHS[date.getMonth()][type]} ${date.getFullYear()}`;
};

export const extractDate = (date) => {
  if (!isValidDate(date)) return;
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return {
    day: day < 10 ? "0" + day : day,
    month: month < 10 ? "0" + month : month,
    year: date.getFullYear(),
  };
};

export const formatDate = (date, separator = "/") => {
  const { day, month, year } = extractDate(date);
  return [month, day, year].join(separator);
};
