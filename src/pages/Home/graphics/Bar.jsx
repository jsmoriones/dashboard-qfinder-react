import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const BarChart = () => {
    let labels = [ "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ];
  const data = {
    labels: labels,
    datasets: [{
        data: [410, 350, 310, 260, 320, 400],
        label: "",
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)'
        ],
    }],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};
export default BarChart;
