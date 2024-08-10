import './SatisficationLineChart.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const SatisfactionLineChart = () => {
  const totalEmployees = 750;

  // Calculate the percentage of employees for each dataset
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Satisfied',
        data: [150, 160, 170, 180, 190, 200, 210], // Example data adjusted
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#36A2EB'
      },
      {
        label: 'Neutral',
        data: [120, 115, 110, 105, 100, 95, 90], // Example data adjusted
        borderColor: '#FFCE56',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#FFCE56'
      },
      {
        label: 'Unsatisfied',
        data: [30, 35, 40, 45, 50, 55, 60], // Example data adjusted
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#FF6384'
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const total = tooltipItem.raw;
            const percentage = ((total / totalEmployees) * 100).toFixed(1);
            return `${tooltipItem.dataset.label}: ${total} (${percentage}%)`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        title: {
          display: true,
          text: 'Month',
          color: '#333',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          borderDash: [5, 5]
        },
        title: {
          display: true,
          text: 'Number of Employees',
          color: '#333',
          font: {
            size: 14
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div className="chart-container">
      <h3>Employee Satisfaction Trend</h3>
      <br />
      <Line data={data} options={options} />
    </div>
  );
};

export default SatisfactionLineChart;
