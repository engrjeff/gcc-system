export const GENDERS = [
  {
    id: 1,
    value: "male",
    label: "Male",
  },
  {
    id: 2,
    value: "female",
    label: "Female",
  },
];

export const CELL_STATUS = [
  { id: 1, value: "1T", label: "First timer" },
  { id: 2, value: "2T", label: "Second timer" },
  { id: 3, value: "3T", label: "Third timer" },
  { id: 4, value: "4T", label: "Fourth timer" },
  { id: 5, value: "R", label: "Regular" },
];

export const CHURCH_STATUS = [
  { id: 1, value: "NACS", label: "Not yet attended church" },
  { id: 2, value: "ACS", label: "Attended church" },
  { id: 3, value: "CICS", label: "Consistent in church" },
];

export const MEMBER_TYPES = [
  { id: 1, value: "parent", label: "Parent" },
  { id: 2, value: "youngpro", label: "Young Professional" },
  { id: 3, value: "student", label: "Student" },
  { id: 4, value: "kid", label: "Kid" },
];

export const USER_ROLES = [
  // { id: 1, value: "admin", label: "Admin" },
  { id: 2, value: "primary", label: "Primary Leader" },
  { id: 3, value: "leader", label: "Leader" },
];

export const MEMBER_SORT_PATHS = [
  { id: 1, value: "name", label: "Name" },
  { id: 2, value: "profile.cellStatus", label: "Cell Status" },
  { id: 3, value: "profile.churchStatus", label: "Church Status" },
];
