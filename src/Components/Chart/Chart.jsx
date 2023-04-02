import styles from "./chart.module.css";
import '../../App.css'
import { Bar } from "react-chartjs-2";
import data from '../../data.json'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const labels = data.map(item => item.day);
  const datasets = [
    {
      data: data.map(item => item.amount),
      backgroundColor: data.map(item => item.day === "wed" ? "#8ED9E2" : "#FF8B6F"),
      elements: {
        bar: {
          borderRadius: 5, // valor em pixels
          borderSkipped: false // aplicar borda em todas as bordas
          
        }
      }
    },
  ];
  
  const options = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        min: 0,
        max: 80,
        display: false,
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        grid: {
          display: true
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          font: {
            size: 12,
          },
        }, 
        display: false,
      },
    },
    maxBarThickness: 50,
  };
  

  const chartData = {
    labels,
    datasets,
  };

  return (
    <div className={styles.contentWrapper}>
      <h1>Spending - last 7 days</h1>
        <div className={styles.chart}>
            <Bar data={chartData} options={options} />
        <div className={styles.line}>
        </div>
        </div>
     <div className={styles.stats}>
        <p>Total this month</p>
        <span>478.33</span>
        <div>
            <p>+2.4%</p>
            <p>from last month</p>
        </div>
     </div>
    </div>
  );
}
