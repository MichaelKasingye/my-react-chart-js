export function createDate(dateInfo) {
  const customDate = new Date(dateInfo);
  const date =
    customDate.getFullYear() +
    "-" +
    (customDate.getMonth() + 1) + "-" + customDate.getDate()+ "-" +  customDate.getHours();
  return date;
}

// export function extractTimeData(filterData) {
//   return filterData.map(item => {
//     const date = new Date(item.date);
//     return {
//       label: item.label,
//       value: item.value,
//       time: {
//         hours: date.getHours(),
//         days: date.getDate(),
//         months: date.getMonth() + 1,
//       },
//     };
//   });
// }


// "2022-01-16 10:11:02.835"
// export const filterData = [
//   {
//     label: "Rooms",
//     value: 20,
//     date: createDate("2022, 1, 5"),
//   },
//   {
//     label: "Gym",
//     value: 30,
//     date: createDate("2022, 1, 5"),
//   },
//   { label: "Restaurant", value: 40, date: createDate("2022, 1, 6") },
//   { label: "Beach", value: 50, date: createDate("2022, 1, 7") },
//   { label: "Boat ride", value: 60, date: createDate("2022, 1, 8") },

//   {
//     label: "Rooms",
//     value: 30,
//     date: createDate("2022, 1, 3"),
//   },
//   {
//     label: "Gym",
//     value: 30,
//     date: createDate("2022, 1, 5"),
//   },
//   { label: "Restaurant", value: 10, date: createDate("2022, 1, 6") },
//   { label: "Beach", value: 80, date: createDate("2022, 1, 17") },
//   { label: "Boat ride", value: 60, date: createDate("2022, 1, 18") },
// ];
export const filterData = [
// BEGINNING OF 2022
  {
    label: "Rooms",
    value: 20,
    date: "2022-01-16 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-01-16 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-01-06 08:30:00.000" },
  { label: "Beach", value: 50, date: "2022-01-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-01-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-01-16 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-01-16 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-01-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2022-01-17 17:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-01-18 19:45:30.100" },


// Feb
  {
    label: "Rooms",
    value: 20,
    date: "2022-02-01 10:11:02.835",
  },
  {
    label: "Rooms",
    value: 10,
    date: "2022-02-03 10:15:20.200",
  },
  {
    label: "Gym",
    value: 20,
    date: "2022-02-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-02-13 08:30:00.000" },
  { label: "Beach", value: 50, date: "2022-02-13 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-02-13 14:45:30.100" },

  { 
    label: "Rooms",
    value: 20,
    date: "2022-02-02 10:11:02.835",
  },
  {
    label: "Rooms",
    value: 30,
    date: "2022-02-06 10:15:20.200",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-02-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-02-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2022-02-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-02-02 19:45:30.100" },

  // March
  {
    label: "Rooms",
    value: 20,
    date: "2022-03-03 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-03-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-03-04 08:30:00.000" },
  { label: "Beach", value: 50, date: "2022-03-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-03-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-03-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-03-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-03-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2022-03-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-03-02 19:45:30.100" },

  // April
  {
    label: "Rooms",
    value: 20,
    date: "2022-04-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-04-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-04-04 08:30:00.000" },
  { label: "Beach", value: 50, date: "2022-04-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-04-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-04-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-04-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-04-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2022-04-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-04-02 19:45:30.100" },
  // May
  {
    label: "Rooms",
    value: 20,
    date: "2022-05-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-05-03 10:15:20.200",
  },
  { label: "Restaurant", value: 22, date: "2022-05-04 08:30:00.000" },
  { label: "Beach", value: 11, date: "2022-05-07 12:00:00.000" },
  { label: "Boat ride", value: 6, date: "2022-05-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-05-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-05-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-05-06 08:30:00.000" },
  { label: "Beach", value: 33, date: "2022-05-17 04:30:00.000" },
  { label: "Boat ride", value: 90, date: "2022-05-02 19:45:30.100" },

  // May
  {
    label: "Rooms",
    value: 20,
    date: "2022-06-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 29,
    date: "2022-06-03 10:15:20.200",
  },
  { label: "Restaurant", value: 25, date: "2022-06-04 08:30:00.000" },
  { label: "Beach", value: 10, date: "2022-06-07 12:00:00.000" },
  { label: "Boat ride", value: 49, date: "2022-06-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-06-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-06-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-06-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2022-06-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-06-02 19:45:30.100" },

  // June
  {
    label: "Rooms",
    value: 20,
    date: "2022-07-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 3,
    date: "2022-07-03 10:15:20.200",
  },
  { label: "Restaurant", value: 4, date: "2022-07-04 08:30:00.000" },
  { label: "Beach", value: 50, date: "2022-07-07 12:00:00.000" },
  { label: "Boat ride", value: 6, date: "2022-07-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-07-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-07-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-07-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2022-07-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-07-02 19:45:30.100" },

  // July
  {
    label: "Rooms",
    value: 20,
    date: "2022-08-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-08-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-08-04 08:30:00.000" },
  { label: "Beach", value: 50, date: "2022-08-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-08-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-08-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 50,
    date: "2022-08-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-08-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2022-08-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-08-02 19:45:30.100" },

  // Aug
  {
    label: "Rooms",
    value: 20,
    date: "2022-09-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-09-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-09-04 08:30:00.000" },
  { label: "Beach", value: 50, date: "2022-09-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-09-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 0,
    date: "2022-09-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 32,
    date: "2022-09-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-09-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2022-09-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-09-02 19:45:30.100" },

  // Sept
  {
    label: "Rooms",
    value: 20,
    date: "2022-10-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-10-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-10-04 08:30:00.000" },
  { label: "Beach", value: 50, date: "2022-10-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-10-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 44,
    date: "2022-10-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-10-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-10-06 08:30:00.000" },
  { label: "Beach", value: 89, date: "2022-10-17 10:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-10-02 19:45:30.100" },

  // oct
  {
    label: "Rooms",
    value: 20,
    date: "2022-11-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-11-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-11-04 08:30:00.000" },
  { label: "Beach", value: 20, date: "2022-11-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-11-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-11-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 0,
    date: "2022-11-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-11-06 08:30:00.000" },
  { label: "Beach", value: 0, date: "2022-11-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-11-02 19:45:30.100" },

  // Dec
  {
    label: "Rooms",
    value: 20,
    date: "2022-12-01 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-12-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2022-12-04 08:30:00.000" },
  { label: "Beach", value: 10, date: "2022-12-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2022-12-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2022-12-02 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2022-12-06 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2022-12-06 08:30:00.000" },
  { label: "Beach", value: 8, date: "2022-12-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2022-12-02 19:45:30.100" },


  // BEGINNING OF 2023
  // JAN
  {
    label: "Rooms",
    value: 20,
    date: "2023-01-16 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2023-01-16 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2023-01-06 08:30:00.000" },
  { label: "Beach", value: 50, date: "2023-01-07 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2023-01-08 14:45:30.100" },

  {
    label: "Rooms",
    value: 20,
    date: "2023-01-16 10:11:02.835",
  },
  {
    label: "Gym",
    value: 30,
    date: "2023-01-16 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2023-01-06 08:30:00.000" },
  { label: "Beach", value: 80, date: "2023-01-17 17:30:00.000" },
  { label: "Boat ride", value: 60, date: "2023-01-18 19:45:30.100" },


// Feb
  {
    label: "Rooms",
    value: 20,
    date: "2023-02-01 10:11:02.835",
  },
  {
    label: "Rooms",
    value: 10,
    date: "2023-02-03 10:15:20.200",
  },
  {
    label: "Gym",
    value: 20,
    date: "2023-02-03 10:15:20.200",
  },
  { label: "Restaurant", value: 40, date: "2023-02-13 08:30:00.000" },
  { label: "Beach", value: 50, date: "2023-02-13 12:00:00.000" },
  { label: "Boat ride", value: 60, date: "2023-02-14 14:45:30.100" },

  { 
    label: "Rooms",
    value: 20,
    date: "2023-02-02 10:11:02.835",
  },
  {
    label: "Rooms",
    value: 30,
    date: "2023-02-06 10:15:20.200",
  },
  {
    label: "Gym",
    value: 30,
    date: "2023-02-20 10:15:20.200",
  },
  { label: "Restaurant", value: 10, date: "2023-02-20 08:30:00.000" },
  { label: "Beach", value: 80, date: "2023-02-17 04:30:00.000" },
  { label: "Boat ride", value: 60, date: "2023-02-20 19:45:30.100" },

];