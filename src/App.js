import React, { useState, useEffect, useMemo } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Charts from "./components/ChartBar";
import { filterData } from "./utils/filteredData";

import "./App.css";
import { dayNames, hours, labels, monthNames } from "./utils/labels";
import {
  getAddedFilteredMonths,
  getAddedFilteredValues,
} from "./utils/getFilteredChartData";
import { colorLabels, colors } from "./utils/colors";
import { useLocalStorage } from "./utils/useLocalStorage";

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(filterData);
  const [selected, setSelected] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [trigger, setTrigger] = useState(false);

  const [selectedRange, setSelectedRange] = useState("");
  const [graphData, setGraphData] = useState(monthNames);
  const [getLocalStorage, setGetLocalStorage] = useState(monthNames);

  const [inputDateRanges, setInputDateRanges] = useState("");
  const [defaultRange, setDefaultRange] = useState("");

  // const [name, setName] = useLocalStorage("name", "2");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputDateRanges((values) => ({ ...values, [name]: value }));
  };

  const handleChangeRange = (event) => {
    event.preventDefault();
    setDefaultRange(inputDateRanges);

    localStorage.setItem("range", inputDateRanges);
    window.location.reload();
  };

  const number = localStorage.getItem("range");
  const numToString = parseInt(number);

  const diffTime = endDate.getTime() - startDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);

  const extractNthDay = (dayNumber) => {
    const date = new Date();
    date.setDate(date.getDate() - dayNumber);
    return date;
  };

  // const extractTimeData = (filterData) => {
  //   const monthNames = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //   return filterData?.map(item => {
  //     const date = new Date(item.date);
  //     console.log(date.getMonth() + 1);
  //     return {
  //       label: item.label,
  //       value: item.value,
  //       time: {
  //         hours: date.getHours(),
  //         days: date.getDate(),
  //         dayName: dayNames[date.getDay()],
  //         months: date.getMonth() + 1,
  //         monthName: monthNames[date.getMonth()],
  //       },
  //     };
  //   });
  // }

  const filteredNewDataInfo = filterData.filter((item) => {
    const itemDate = new Date(item.date);

    return itemDate >= startDate && itemDate <= endDate;
  });

  const chartData = {
    labels: graphData ? graphData : monthNames,
    datasets: [],
  };

  let periods = [];

  const addDataset = (label, data, bgColor, borderColor, borderWidth) => {
    periods.push(data);

    chartData.datasets.push({
      label,
      data,
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
    });
  };

  const initialGraph = useMemo(() => {
    const fillGraph = labels.map((services, index) =>
      addDataset(
        services,
        graphData.map((period) =>
          getAddedFilteredValues(services, period, startDate, endDate)
        ),
        colors[index],
        1
      )
    );
    return fillGraph;
  }, [addDataset, graphData, startDate, endDate]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("range"));
    // defaultRange
    if (saved) {
      return setStartDate(extractNthDay(saved));
    }
    console.log(saved);

    setStartDate(extractNthDay(366));
    setGraphData(monthNames);
  }, [inputDateRanges]);

  return (
    <>
      <button
        onClick={() => {
          setGraphData(dayNames);
          setSelectedRange("dayNames");
          setStartDate(extractNthDay(8));
        }}
      >
        Weekly
      </button>
      <button
        onClick={() => {
          setGraphData(monthNames);
          setSelectedRange("monthNames");
          setStartDate(extractNthDay(366));
        }}
      >
        Monthly
      </button>
      <button
        onClick={() => {
          setGraphData(hours);
          setSelectedRange("hours");
          setStartDate(extractNthDay(2));
        }}
      >
        Daily
      </button>

      <div className="App">
        <Charts
          chartData={chartData}
          location="Uganda"
          legendPosition="bottom"
          displayTitle="Hotel Revenue"
        />

        <form onSubmit={handleChangeRange}>
          <label>
            Set Default range:
            <input
              type="number"
              name="rangeTime"
              value={inputDateRanges}
              onChange={(e) => setInputDateRanges(e.target.value)}
            />
          </label>
          <input type="submit" />
          <p>{diffDays} days back</p>
        </form>

        {/* date */}
        {selectedRange === "monthNames" ? (
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
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
