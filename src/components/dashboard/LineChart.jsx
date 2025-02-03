import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65, 34, 45, 67, 89, 23, 45],
      fill: false,
      borderColor: "#05CC7E",
      lineTension: 0.5,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="px-5 py-3 w-full h-[300px]">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
