import React, { useState, useEffect, useMemo } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Line } from 'react-chartjs-2';
import Charts from './components/ChartBar';
import { filterData } from './utils/filteredData';

import './App.css'
import { dayNames, hours, labels, monthNames } from './utils/labels';
import { getAddedFilteredValues } from './utils/getFilteredChartData';


const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredData, setFilteredData] = useState(filterData);
  const [selected, setSelected] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedRange, setSelectedRange] = useState('');
  const [graphData, setGraphData] = useState(undefined);
  const [dateRanges, setDateRanges] = useState("");

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

// console.log("startDate - ",startDate);
// console.log("endDate - ",endDate);

  const diffTime = endDate.getTime() - startDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);

  const extractNthDay=(dayNumber)=>{
    // console.log("dayNumber........................................");
    const date = new Date();
    date.setDate(date.getDate() - dayNumber);
    return date;
  }
  // const date = new Date();

  // console.log(date.setDate(date.getDate() - 360));

  const extractTimeData = (filterData) => {
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
      console.log(date.getMonth() + 1);
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

  // const timeData = extractTimeData(filterData);

// const filteredDataInfo = filterData.filter((item) => {
//   const itemDate = new Date(item.date);
//   const dateRange = itemDate >= startDate && itemDate <= endDate;
//   console.log("dateRange");
//   // console.log(itemDate);
//   return dateRange
// });

// function getPeriodService(service, period, data) {
//   let aggregateddata = extractTimeData(data)
  
//   let getServiceFilter = aggregateddata?.filter((item) => {
//     // console.log(data);
//     return item.label === service
//   })
//   if (period === "Sunday" || period === "Monday" || period === "Tuesday" || period === "Wednesday" || period === "Thursday" || period === "Friday" || period === "Saturday") {
    
//     let getDayNameServiceFilter = getServiceFilter.filter((item) => {
//       return item.time.dayName === period
//     })
//   console.log(getDayNameServiceFilter);

//     return getDayNameServiceFilter
//   }

//   if (period === "January"|| period === "February" || period === "March" || period === "April" || period === "May" || period === "June" || period === "July" || period === "August" || period === "September" || period === "October" || period === "November"|| period === "December") {
    
//     let getMonthNameServiceFilter = getServiceFilter.filter((item) => {
//       // console.log(item.time?.monthName ==="March");
//       return item.time.monthName === period
//     })
//   // console.log(getMonthNameServiceFilter);

//     return getMonthNameServiceFilter
//   }

//   if (period === "1" || period === "2" || period === "3" || period === "4" || period === "5" || period === "6" || period === "7" || period === "8" || period === "9" || period === "10"|| period === "11"|| period === "12" || period === "13" || period === "14" || period === "15" || period === "16" || period === "17" || period === "18" || period === "19" || period === "20"|| period === "21"|| period === "22" ||period === "23" || period === "24") {
    
//     let getHoursServiceFilter = getServiceFilter.filter((item) => {
//       return item.time.hours.toString() === period
//     })
//     return getHoursServiceFilter
//   }
// }

// function getAddedFilteredValues( service, period) {
//   const addFilteredValues = getPeriodService(service, period, filteredDataInfo)?.filter((item) => {
//     if(period === "Sunday" || period === "Monday" || period === "Tuesday" || period === "Wednesday" || period === "Thursday" || period === "Friday" || period === "Saturday"){
      
//       return item.time.dayName === period}

//     if (period === "January" || period === "February" || period === "March" || period === "April" || period === "May" || period === "June" || period === "July" || period === "August" || period === "September" || period === "October" || period === "November"|| period === "December") {
      
//       return item.time?.monthName === period
//     }

//     if (period === "1" || period === "2" || period === "3" || period === "4" || period === "5" || period === "6" || period === "7" || period === "8" || period === "9" || period === "10"|| period === "11"|| period === "12" || period === "13" || period === "14" || period === "15" || period === "16" || period === "17" || period === "18" || period === "19" || period === "20"|| period === "21"|| period === "22" ||period === "23" || period === "24") {
      
//       return item.time.hours.toString() === period
//     }

//   }).reduce(
//     (accumulator, currentValue) => accumulator + currentValue.value,
//     0
//   );

//   return addFilteredValues;
// }

const filteredNewDataInfo = filterData.filter((item) => {
  const itemDate = new Date(item.date);

  return itemDate >= startDate && itemDate <= endDate;
});

console.log(graphData);
console.log(monthNames);

// function iterateDataSet(services, graphData, startDate, endDate){
//   console.log(graphData);
//   return graphData.map((period) => getAddedFilteredValues( services, period, startDate, endDate))
// }

   // const specificData = getPeriodService("Rooms","Monday",filteredDataInfo)
  //  monthNames

  const chartData = {
    labels:graphData?graphData:monthNames,
    datasets: []
  };

  const addDataset = (label, data, bgColor, borderColor, borderWidth) => {
    chartData.datasets.push({
      label,
      data,
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderWidth: borderWidth
    });
  };
  // data: monthNames.map((item) => getAddedFilteredValues( 'Rooms',item)),
  
  // Map this to the service array
  // addDataset('Dataset 1', filteredData.map(item => item.value), 'rgba(75,192,192,0.4)', 'rgba(75,192,192,1)', 1);
  // addDataset('Rooms', monthNames.map((label) => getAddedFilteredValues( 'Rooms',label)), '#44bd32', 'rgba(75,192,192,1)', 1);
  // addDataset('Gym', monthNames.map((item) => getAddedFilteredValues( 'Gym',item)), '#44bd32', 'rgba(75,192,192,1)', 1);
  // addDataset('Beach', monthNames.map((item) => getAddedFilteredValues( 'Beach',item)), '#44bd32', 'rgba(75,192,192,1)', 1);
  

  // const populateGraph = () =>{
  // setStartDate(extractNthDay(8))
  //     labels.map((services) => addDataset(services, dayNames.map((item) => getAddedFilteredValues( services, item)), '#44bd32', 'rgba(75,192,192,1)', 1))
  //   }

  // if(selectedRange === "dayNames") labels.map((services) => addDataset(services, dayNames.map((item) => getAddedFilteredValues( services, item)), '#44bd32', 'rgba(75,192,192,1)', 1))
  // if(selectedRange === "monthNames") labels.map((services) => addDataset(services, monthNames.map((item) => getAddedFilteredValues( services, item)), '#44bd32', 'rgba(75,192,192,1)', 1))
  // if(selectedRange === "hours") labels.map((services) => addDataset(services, hours.map((item) => getAddedFilteredValues( services, item)), '#44bd32', 'rgba(75,192,192,1)', 1))
  
  
  useEffect(() => {
    setStartDate(extractNthDay(366))
  setGraphData(monthNames);
  labels.map((services) => addDataset(services, monthNames.map((period) => getAddedFilteredValues( services, period, startDate, endDate)), '#44bd32', 'rgba(75,192,192,1)', 1))
}, [])

    // const initialGraph = useMemo(() => {
    //   const fillGraph = labels.map((services) => addDataset(services, monthNames.map((period) => getAddedFilteredValues( services, period, startDate, endDate)), '#44bd32', 'rgba(75,192,192,1)', 1))
    //   return fillGraph 
    // }, [labels, addDataset]);
    

    const initialGraph = useMemo(() => {
      const fillGraph = labels.map((services) => addDataset(services, monthNames.map((period) => getAddedFilteredValues( services, period, startDate, endDate)), '#44bd32', 'rgba(75,192,192,1)', 1))
      return fillGraph 
    }, [labels, addDataset]);

  return (
    <>
    <button onClick={()=>{setGraphData(dayNames);setSelectedRange('dayNames');  setStartDate(extractNthDay(8))}} >Weekly</button>
    <button onClick={()=>{setGraphData(monthNames); setSelectedRange('monthNames'); setStartDate(extractNthDay(366))}} >Monthly</button>
    <button onClick={()=>{setGraphData(hours); setSelectedRange('hours'); setStartDate(extractNthDay(1))}} >Daily</button>

      
      <div className="App">
        <Charts chartData={chartData} location="Uganda" legendPosition="bottom" displayTitle="Hotel Revenue" />

        {/* date */}
        <div date-rangepicker className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Start
            </label>
            <DatePicker
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              // maxDate={new Date()}
              selectsStart
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              End
            </label>
            <DatePicker
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              // minDate={new Date(startDate)}
              selectsEnd
            />
          </div>
        </div>
      </div>
    </>
  );
};


export default App;