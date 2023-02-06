import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Charts(props) {
  const { chartData, displayTitle, displayLegend, legendPosition, location } =
    props;
  console.log(chartData);
 
  return (
    <div className="chart">
      <Pie
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Districts Cities In " + location,
            fontSize: 25,
          },
          plugins: {
            title: {
                display: true,
                text: displayTitle,
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
          
            legend: {
                display: true,
                labels: {
                    color: '#2980b9'
                }
            }
        },
          layout: {
            padding: 50
        },
        }}
      />
    </div>
  );
}
