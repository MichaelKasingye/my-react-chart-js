import React, { useState,useEffect } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Line } from 'react-chartjs-2';
import Charts from './components/ChartBar';
import {  filterData } from './utils/filteredData';

import  './App.css'


const App = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredData, setFilteredData] = useState(filterData);
    const [selected, setSelected] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [selectedDate, setSelectedDate] = useState(new Date());

   console.log(endDate);
   console.log(startDate);

const diffTime = endDate.getTime() - startDate.getTime();
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays);

function formatDate(rowDate) {
  const date = rowDate.getFullYear()+'-'+(rowDate.getMonth()+1)+'-'+rowDate.getDate();
  return date
}

const filteredDataInfo = filterData.filter((item) => {
  const itemDate = new Date(item.date);
  return itemDate >= startDate && itemDate <= endDate;
});

function getAddedFilteredValues(label) {
  const addFilteredValues = filteredDataInfo.filter((item) => {
   return item.label===label
  }).reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );
  return addFilteredValues;
}
console.log(filteredDataInfo);
const filterDataObj ={ 
  label: "Rooms",
  value:[
    {
      revenue: 20,
      date: "2023-01-16 10:11:02.835",
    },
    {
      revenue: 20,
      date: "2023-01-17 10:11:02.835",
    },
]



  
}

// console.log(filteredDataInfo);
// console.log(extractTimeData(filterDataObj));

    const labels =  ["Rooms","Gym","Restaurant", "Beach","Boat ride"];// Put this in a JS Set function to avoid repeated data and have unique values

    const chartData = {
        labels: ["Rooms","Gym","Restaurant", "Beach","Boat ride"],
        datasets: [
            {
                label: 'My Data',
                // data: filteredDataInfo.map((item) => item.value),
                data: labels.map((item) => getAddedFilteredValues(item)),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#44bd32',
                borderWidth: 1
            },
            {
              label: 'My Data',
              // data: filteredDataInfo.map((item) => item.value),
              data: labels.map((item) => getAddedFilteredValues(item)),
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: '#44bd32',
              borderWidth: 1
          },
          {
            label: 'My Data',
            // data: filteredDataInfo.map((item) => item.value),
            data: labels.map((item) => getAddedFilteredValues(item)),
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: '#44bd32',
            borderWidth: 1
        }
        ]
    };
    console.log(getAddedFilteredValues("Rooms"));
    return (
        <>
            <div className="App">
            <Charts chartData={chartData} location="Uganda" legendPosition="bottom" displayTitle="Hotel Revenue"/>

            {/* date */}
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
