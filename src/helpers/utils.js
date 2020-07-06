import _ from "lodash";

export const mapCellStatus = (cellStatus) => {
  switch (cellStatus) {
    case "1T":
      return "1st Timer";
    case "2T":
      return "2nd Timer";
    case "3T":
      return "3rd Timer";
    case "4T":
      return "4th Timer";
    case "R":
      return "Regular";
    default:
      return "";
  }
};

export const mapMemberType = (memberType) => {
  switch (memberType) {
    case "parent":
      return "Parent";
    case "student":
      return "Student";
    case "youngpro":
      return "Young Professional";
    case "kid":
      return "Kids / Children";
    default:
      return "";
  }
};

export const mapChurchStatus = (churchStatus) => {
  switch (churchStatus) {
    case "NACS":
      return "Not yet attended church";
    case "ACS":
      return "Attended church";
    case "CICS":
      return "Consistent in church";
    default:
      return "";
  }
};

export const parseDate = (_date) => {
  const date = new Date(_date);
  let month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;
  let day = date.getDate();
  if (day < 10) day = "0" + day;
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export const getInitials = (name) => {
  const splitName = name.split(" ");
  return splitName.length > 1
    ? splitName[0][0] + splitName[1][0]
    : splitName[0][0];
};

export const range = (start, end) => _.range(start, end + 1);

export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

export const sort = (items, path, order) => _.orderBy(items, [path], [order]);
