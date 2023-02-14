export const extractTimeData = (filterData) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return filterData?.map(item => {
      const date = new Date(item.date);
      return {
        label: item.label,
        value: item.value,
        time: {
          hours: date.getHours(),
          days: date.getDate(),
          dayName: dayNames[date.getDay()],
          months: date.getMonth() + 1,
          monthName: monthNames[date.getMonth()],
        },
      };
    });
  }


  export const extractNthDay=(dayNumber)=>{
    console.log("dayNumber........................................");
    const date = new Date();
    date.setDate(date.getDate() - dayNumber);
    return date;
  }