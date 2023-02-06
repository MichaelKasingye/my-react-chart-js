import { useEffect, useState } from 'react';
import Button from './components/Button';
import Chart from './components/ChartBar';
import Line from './components/ChartLine';
import Pie from './components/ChartPie';
import Stack from './components/Stack';
import  './App.css'
import ProgressBar from './components/ProgressBar';

function App() {

const chartInfo ={
  chartData:{
    labels: ['Room', 'Swimming', 'Restaurant', 'Spar', 'Gym', 'Bar'],
    datasets:[
      {
        label:'Revenue',
        data:[
          617594,
          181045,
          153060,
          106519,
          105162,
          95072
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
    ]
  }
}
  return (
    <div className="App">
    
     <Chart chartData={chartInfo.chartData} location="Uganda" legendPosition="bottom" displayTitle="Hotel Revenue"/>
     {/* <Line chartData={chartInfo.chartData} location="Uganda" legendPosition="bottom" displayTitle="Uganda Population"/> */}
     {/* <Pie chartData={chartInfo.chartData} location="Uganda" legendPosition="bottom" displayTitle="Uganda Population"/> */}
  <ProgressBar/>
    </div>
  );
}

export default App;
