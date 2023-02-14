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
  
  
  // "2023-01-16 10:11:02.835"
  // export const filterData = [
  //   {
  //     label: "Rooms",
  //     value: 20,
  //     date: createDate("2023, 1, 5"),
  //   },
  //   {
  //     label: "Gym",
  //     value: 30,
  //     date: createDate("2023, 1, 5"),
  //   },
  //   { label: "Restaurant", value: 40, date: createDate("2023, 1, 6") },
  //   { label: "Beach", value: 50, date: createDate("2023, 1, 7") },
  //   { label: "Boat ride", value: 60, date: createDate("2023, 1, 8") },
  
  //   {
  //     label: "Rooms",
  //     value: 30,
  //     date: createDate("2023, 1, 3"),
  //   },
  //   {
  //     label: "Gym",
  //     value: 30,
  //     date: createDate("2023, 1, 5"),
  //   },
  //   { label: "Restaurant", value: 10, date: createDate("2023, 1, 6") },
  //   { label: "Beach", value: 80, date: createDate("2023, 1, 17") },
  //   { label: "Boat ride", value: 60, date: createDate("2023, 1, 18") },
  // ];
  export const filterData = [
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
      label: "Gym",
      value: 30,
      date: "2023-02-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-02-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-02-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-02-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-02-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-02-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-02-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-02-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-02-02 19:45:30.100" },
  
    // March
    {
      label: "Rooms",
      value: 20,
      date: "2023-03-03 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-03-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-03-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-03-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-03-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-03-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-03-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-03-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-03-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-03-02 19:45:30.100" },
  
    // April
    {
      label: "Rooms",
      value: 20,
      date: "2023-04-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-04-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-04-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-04-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-04-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-04-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-04-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-04-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-04-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-04-02 19:45:30.100" },
    // May
    {
      label: "Rooms",
      value: 20,
      date: "2023-05-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-05-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-05-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-05-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-05-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-05-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-05-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-05-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-05-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-05-02 19:45:30.100" },
  
    // May
    {
      label: "Rooms",
      value: 20,
      date: "2023-06-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-06-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-06-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-06-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-06-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-06-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-06-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-06-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-06-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-06-02 19:45:30.100" },
  
    // June
    {
      label: "Rooms",
      value: 20,
      date: "2023-07-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-07-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-07-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-07-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-07-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-07-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-07-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-07-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-07-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-07-02 19:45:30.100" },
  
    // July
    {
      label: "Rooms",
      value: 20,
      date: "2023-08-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-08-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-08-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-08-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-08-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-08-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-08-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-08-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-08-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-08-02 19:45:30.100" },
  
    // Aug
    {
      label: "Rooms",
      value: 20,
      date: "2023-09-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-09-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-09-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-09-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-09-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-09-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-09-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-09-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-09-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-09-02 19:45:30.100" },
  
    // Sept
    {
      label: "Rooms",
      value: 20,
      date: "2023-10-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-10-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-10-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-10-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-10-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-10-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-10-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-10-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-10-17 10:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-10-02 19:45:30.100" },
  
    // oct
    {
      label: "Rooms",
      value: 20,
      date: "2023-11-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-11-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-11-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-11-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-11-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-11-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-11-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-11-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-11-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-11-02 19:45:30.100" },
  
    // Dec
    {
      label: "Rooms",
      value: 20,
      date: "2023-12-01 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-12-03 10:15:20.200",
    },
    { label: "Restaurant", value: 40, date: "2023-12-04 08:30:00.000" },
    { label: "Beach", value: 50, date: "2023-12-07 12:00:00.000" },
    { label: "Boat ride", value: 60, date: "2023-12-08 14:45:30.100" },
  
    {
      label: "Rooms",
      value: 20,
      date: "2023-12-02 10:11:02.835",
    },
    {
      label: "Gym",
      value: 30,
      date: "2023-12-06 10:15:20.200",
    },
    { label: "Restaurant", value: 10, date: "2023-12-06 08:30:00.000" },
    { label: "Beach", value: 80, date: "2023-12-17 04:30:00.000" },
    { label: "Boat ride", value: 60, date: "2023-12-02 19:45:30.100" },
  
  ];