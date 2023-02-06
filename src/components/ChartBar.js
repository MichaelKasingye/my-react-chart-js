import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
export default function Charts(props) {
  const { chartData, displayTitle, displayLegend, legendPosition, location } =
    props;
  console.log(chartData);
 
  return (
    <>
    <div className="chart">
      <Bar
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
        scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Departments',
                color: '#911',
                font: {
                  family: 'Comic Sans MS',
                  size: 20,
                  weight: 'bold',
                  lineHeight: 1.2,
                },
                padding: {top: 20, left: 0, right: 0, bottom: 0}
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Income',
                color: '#191',
                font: {
                  family: 'Times',
                  size: 20,
                  style: 'normal',
                  lineHeight: 1.2
                },
                padding: {top: 30, left: 0, right: 0, bottom: 10}
              }
            }
          }

        }}
      />
    </div>

    </>
  );
}
