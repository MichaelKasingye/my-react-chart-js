import { extractTimeData } from "./extractTimeData";
import { filterData } from "./filteredData";
import { labels } from "./labels";


function filteredDataInfo(startDate, endDate) { 
  return filterData.filter((item) => {
  const itemDate = new Date(item.date);
  return itemDate >= startDate && itemDate <= endDate;
});}

function getPeriodOfService(service, period, data) {
  let aggregateddata = extractTimeData(data)
  
  let getServiceFilter = aggregateddata?.filter((item) => {
    // console.log(data);
    return item.label === service
  })
  if (period === "Sunday" || period === "Monday" || period === "Tuesday" || period === "Wednesday" || period === "Thursday" || period === "Friday" || period === "Saturday") {
    
    let getDayNameServiceFilter = getServiceFilter.filter((item) => {
      return item.time.dayName === period
    })
  console.log(getDayNameServiceFilter);

    return getDayNameServiceFilter
  }

  if (period === "January"|| period === "February" || period === "March" || period === "April" || period === "May" || period === "June" || period === "July" || period === "August" || period === "September" || period === "October" || period === "November"|| period === "December") {
    
    let getMonthNameServiceFilter = getServiceFilter.filter((item) => {
      return item.time.monthName === period
    })

    return getMonthNameServiceFilter
  }

  if (period === "1" || period === "2" || period === "3" || period === "4" || period === "5" || period === "6" || period === "7" || period === "8" || period === "9" || period === "10"|| period === "11"|| period === "12" || period === "13" || period === "14" || period === "15" || period === "16" || period === "17" || period === "18" || period === "19" || period === "20"|| period === "21"|| period === "22" ||period === "23" || period === "24") {
    
    let getHoursServiceFilter = getServiceFilter.filter((item) => {
      return item.time.hours.toString() === period
    })
    return getHoursServiceFilter
  }
}


  
  export function getAddedFilteredValues( service, period, startDate, endDate) {
    // labels.map(services => )
    const filteredByDateRange = filteredDataInfo(startDate, endDate);
    const addFilteredValues = getPeriodOfService(service, period, filteredByDateRange)?.filter((item) => {
      if(period === "Sunday" || period === "Monday" || period === "Tuesday" || period === "Wednesday" || period === "Thursday" || period === "Friday" || period === "Saturday"){
        
        return item.time.dayName === period}
  
      if (period === "January" || period === "February" || period === "March" || period === "April" || period === "May" || period === "June" || period === "July" || period === "August" || period === "September" || period === "October" || period === "November"|| period === "December") {
        
        return item.time?.monthName === period
      }
  
      if (period === "1" || period === "2" || period === "3" || period === "4" || period === "5" || period === "6" || period === "7" || period === "8" || period === "9" || period === "10"|| period === "11"|| period === "12" || period === "13" || period === "14" || period === "15" || period === "16" || period === "17" || period === "18" || period === "19" || period === "20"|| period === "21"|| period === "22" ||period === "23" || period === "24") {
        
        return item.time.hours.toString() === period
      }
  
    }).reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );
  
    return addFilteredValues;
  }