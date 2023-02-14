import React, { useState,useEffect } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Line } from 'react-chartjs-2';
import Charts from './components/ChartBar';
import {  filterData } from './utils/filteredData';

import  './App.css'
import { dayNames, hours, monthNames } from './utils/labels';
import { extractNthDay, extractTimeData } from './utils/extractTimeData';
import { getAddedFilteredValues } from './utils/getFilteredChartData';


const App = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredData, setFilteredData] = useState(filterData);
    const [selected, setSelected] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [selectedDate, setSelectedDate] = useState(new Date());

    console.log(startDate);
   console.log(endDate);

const diffTime = endDate.getTime() - startDate.getTime();
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffDays);

// function formatDate(rowDate) {
//   const date = rowDate.getFullYear()+'-'+(rowDate.getMonth()+1)+'-'+rowDate.getDate();
//   return date
// }

 const extract7thDay=(dayNumber)=>{
  console.log("dayNumber........................................");
  const date = new Date();
  date.setDate(date.getDate() - dayNumber);
  return date;
}

// const filteredDataInfo = filterData.filter((item) => {
//   const itemDate = new Date(item.date);
//   return itemDate >= startDate && itemDate <= endDate;
// });

// function getAddedFilteredValues(period) {
//   const formattedDataStructure = extractTimeData(filteredDataInfo)
//   console.log(formattedDataStructure);
//   const addFilteredValues = formattedDataStructure.filter((item) => {
//   // return item.time?.monthName === period
//   // return item.time.dayName === period
//   console.log(item);
//   return item.time.hours.toString() === period
//   })
//   .reduce(
//     (accumulator, currentValue) => accumulator + currentValue.value,
//     0
//   );
//   return addFilteredValues;
// }

// console.log(filteredDataInfo);

// console.log(filteredDataInfo);
// console.log(extractTimeData(filterDataObj));

console.log(extractNthDay(366))
const monthNamesLabels = [
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

function filteredDataInfo(startDate, endDate) { 
  return filterData.filter((item) => {
  const itemDate = new Date(item.date);
  return itemDate >= startDate && itemDate <= endDate;
});}
function getAddedFilteredChartValues(period, startDate, endDate) {
  const formattedDataStructure = extractTimeData(filteredDataInfo(startDate, endDate))
  // console.log(formattedDataStructure);
  const addFilteredValues = formattedDataStructure.filter((item) => {
          console.log(item.time.monthName);
  return item.time.monthName === period
  }
  )
  .reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );
  return addFilteredValues;
}
// console.log(getAddedFilteredChartValues("January", startDate, endDate));

    const chartData = {
        labels: monthNames,
        datasets: [
            {
                label: 'Hotel Revenue',
                // data: filteredDataInfo.map((item) => item.value),
                data: monthNamesLabels.map((label) => getAddedFilteredChartValues(label, startDate, endDate)),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#44bd32',
                borderWidth: 1
            },
        ]
    };

  //   const chartData = {
  //     labels: dayNames,
  //     datasets: [
  //         {
  //             label: 'Hotel Revenue',
  //             // data: filteredDataInfo.map((item) => item.value),
  //             data: dayNames.map((label) => getAddedFilteredValues(label, startDate, endDate)),
  //             backgroundColor: 'rgba(75,192,192,0.4)',
  //             borderColor: '#44bd32',
  //             borderWidth: 1
  //         },
  //     ]
  // };

//   const chartData = {
//     labels: hours,
//     datasets: [
//         {
//             label: 'Hotel Revenue',
//             // data: filteredDataInfo.map((item) => item.value),
//             data: hours.map((label) => getAddedFilteredValues(label, startDate, endDate)),
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: '#44bd32',
//             borderWidth: 1
//         },
//     ]
// };

    return (
        <>
            <div className="App">
            <Charts chartData={chartData} location="Uganda" legendPosition="bottom" displayTitle="Hotel Revenue"/>

            {/* date */}

            <button onClick={()=>{setStartDate(extractNthDay(2))}} >Daily</button>
    <button onClick={()=>{setStartDate(extractNthDay(7))}} >weekly</button>
    <button onClick={()=>{setStartDate(extractNthDay(360))}} >Monthly</button>

      <div date-rangepicker className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
         Start
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          // maxDate={new Date()}
          selectsStart
        />
        </div>
        <div>
        <label >
          End
        </label>
        <DatePicker
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
