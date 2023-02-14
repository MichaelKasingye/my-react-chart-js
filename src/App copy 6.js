import React, { useState, useEffect } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Line } from 'react-chartjs-2';
import Charts from './components/ChartBar';
import { filterData } from './utils/filteredData';

import './App.css'

// var graphData = null;

const App = () => {
 
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredData, setFilteredData] = useState(filterData);
  const [selected, setSelected] = useState('');
  const [selectedRange, setSelectedRange] = useState('');
  const [graphData, setGraphData] = useState(undefined);
  const [dateRanges, setDateRanges] = useState("");

  console.log(graphData);

  const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const diffTime = endDate.getTime() - startDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // function formatDate(rowDate) {
  //   const date = rowDate.getFullYear() + '-' + (rowDate.getMonth() + 1) + '-' + rowDate.getDate();
  //   return date
  // }

  // const filteredDataInfo = filterData.filter((item) => {
  //   const itemDate = new Date(item.date);
  //   return itemDate >= startDate && itemDate <= endDate;
  // });

  // console.log(filteredDataInfo);

  // function getAddedFilteredValues(label) {

  //   const addFilteredValues = filteredDataInfo.filter((item) => {
  //   console.log(item.label === label)

  //     return item.label === label
  //   }).reduce(
  //     (accumulator, currentValue) => accumulator + currentValue.value,
  //     0
  //   );
  //   // console.log(addFilteredValues)

  //   return addFilteredValues;
  // }



  const extract7thDay=(dayNumber)=>{
    const date = new Date();
    date.setDate(date.getDate() - dayNumber);
    return date;
  }
  
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

    return filterData.map(item => {
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

  const timeData = extractTimeData(filterData);
  // console.log(timeData);
// console.log(timeData.map((item) => item.value));
// console.log(timeData.map((item) => getAddedFilteredValues(item))); 

const filteredDataInfo = filterData.filter((item) => {
  const itemDate = new Date(item.date);
  return itemDate >= startDate && itemDate <= endDate;
});


function getAddedFilteredValues(label) {
  let aggregateddata = extractTimeData(filteredDataInfo)
  const addFilteredValues = aggregateddata.filter((item) => {
    if(selectedRange==='dayNames') return item.time.dayName === label;
    if(selectedRange==='hours') return item.time.hours.toString() === label;
  
    return item.time.monthName === label

  }).reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

  return addFilteredValues;
}



  const labels = ["Rooms", "Gym", "Restaurant", "Beach", "Boat ride"];// Put this in a JS Set function to avoid repeated data and have unique values
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
  const hours = ["1","2","3","4","5","6","7","8","9","10","11","12",
                    "13","14","15","16","17","18","19","20","21","22","23","24",]
  const chartData = {
   
    labels:graphData?graphData:monthNames,

    datasets: [
      {
        label: 'My Data',
        data: graphData!==undefined?graphData.map((item) => getAddedFilteredValues(item)):monthNames.map((item) => getAddedFilteredValues(item)),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#44bd32',
        borderWidth: 1
      }
    ]
  };
// console.log(graphData);

// const extract7thDay=(dayNumber)=>{
//   console.log("dayNumber........................................");
//   const date = new Date();
//   date.setDate(date.getDate() - dayNumber);
//   return date;
// }
const handleSubmit = (event) => {
  event.preventDefault();
  // setDateRanges
  setStartDate(extract7thDay(dateRanges))
  
  console.log(extract7thDay(dateRanges));
}

useEffect(()=>{
  setGraphData(monthNames);
  setSelectedRange('monthNames');
  setStartDate(extract7thDay(30))
},[])

  return (
    <>
    <button onClick={()=>{setGraphData(dayNames);setSelectedRange('dayNames');  setStartDate(extract7thDay(6))}} >Weekly</button>
    <button onClick={()=>{setGraphData(monthNames); setSelectedRange('monthNames'); setStartDate(extract7thDay(366))}} >Monthly</button>
    <button onClick={()=>{setGraphData(hours); setSelectedRange('hours'); setStartDate(extract7thDay(1))}} >Daily</button>

      
    <form onSubmit={handleSubmit}>
  <label for="user">Set days back</label>
  <input type="text" id="user" name="dayRange"  value={dateRanges}
          onChange={(e) => setDateRanges(e.target.value) }/>
  <button type="submit" >Submit</button>
</form>

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
