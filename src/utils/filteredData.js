export function createDate(dateInfo) {
  const customDate = new Date(dateInfo);
  const date =  customDate.getFullYear() + "-" +(customDate.getMonth() + 1) + "-" + customDate.getDate();
  return date;
}

export const filterData = [
  {
    label: "Rooms",
    value: 20,
    date: createDate("2023, 1, 1"),
  },
  {
    label: "Gym",
    value: 30,
    date: createDate("2023, 1, 5"),
  },
  { label: "Restaurant", value: 40, date: createDate("2023, 1, 6") },
  { label: "Beach", value: 50, date: createDate("2023, 1, 7") },
  { label: "Boat ride", value: 60, date: createDate("2023, 1, 8") },

  {
    label: "Rooms",
    value: 20,
    date: createDate("2023, 1, 7"),
  },
  {
    label: "Gym",
    value: 30,
    date: createDate("2023, 1, 5"),
  },
  { label: "Restaurant", value: 10, date: createDate("2023, 1, 6") },
  { label: "Beach", value: 80, date: createDate("2023, 1, 17") },
  { label: "Boat ride", value: 60, date: createDate("2023, 1, 18") },
];
