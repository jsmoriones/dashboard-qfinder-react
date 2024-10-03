import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

let useCurves = true;
//const labels = Utils.months({count: 7});
let labels = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
//const dataset1 = [10, , , 250, , , 180, , , , , 400];
const dataset1 = [10, 160, 230, 250, 220, 290, 180, 160, 150, 170, 200, 400];
const dataset2 = [100, 310, 240, 110, 110, 210, 260, 200, 110, 50, 20, 0];

const data = {
  labels: labels,
  datasets: [{
        label: 'Nuevos F-A',
        data: dataset1,
        fill: false,
        borderColor: '#E3A3E0',
        tension: useCurves ? 0.3 : 0
    },{
        label: 'Antiguos F-A',
        data: dataset2,
        fill: false,
        borderColor: '#D8D2FC',
        tension: useCurves ? 0.3 : 0
    }],
};
const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};
export default LineChart;
