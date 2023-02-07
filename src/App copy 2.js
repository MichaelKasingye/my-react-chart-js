import { useEffect, useState } from "react";
import Button from "./components/Button";
import Chart from "./components/ChartBar";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import {  departmentData} from "./utils/data";
import { chartInfo } from "./utils/chartInfo";

function App() {
  
  // console.log(departmentData.filter(date => date.date.getMonth() == 1).map(income => Number(income.Income)));
  // console.log(departmentData.filter(date => date.date.getYear())[0].date.getYear());
  console.log(departmentData.filter(date => date.date ==="2022-9-4"));
  return (
    <div className="App">
      <Chart
        chartData={chartInfo.chartData}
        location="Uganda"
        legendPosition="bottom"
        displayTitle="Hotel Revenue"
      />
      <ProgressBar/>
    </div>
  );
}

export default App;
