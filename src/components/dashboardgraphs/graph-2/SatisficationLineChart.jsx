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
import { useTranslation } from 'react-i18next';
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const SatisfactionLineChart = () => {
  const totalEmployees = 750;
  const {t} = useTranslation("global")
  // Calculate the percentage of employees for each dataset
  const data = {
    labels: [t("dashboard.graphs.january"), t("dashboard.graphs.february"), t("dashboard.graphs.march"), t("dashboard.graphs.april"), t("dashboard.graphs.may"), t("dashboard.graphs.june"), t("dashboard.graphs.july")],
    datasets: [
      {
        label: t("dashboard.graphs.satisfied"),
        data: [150, 160, 170, 180, 190, 200, 210], // Example data adjusted
        borderColor: '#1E90FF',
        backgroundColor: 'rgba(30, 144, 255, 0.2)',
        fill: true,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#1E90FF'
      },
      {
        label: t("dashboard.graphs.neutral"),
        data: [120, 115, 110, 105, 100, 95, 90], // Example data adjusted
        borderColor: '#FFD700',
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        fill: true,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#FFD700'
      },
      {
        label: t("dashboard.graphs.unsatisfied"),
        data: [30, 35, 40, 45, 50, 55, 60], // Example data adjusted
        borderColor: '#E74C3C',
        backgroundColor: 'rgba(231, 76, 60, 0.2)',
        fill: true,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#E74C3C'
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
          text: t("dashboard.graphs.month"),
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
          text: t("dashboard.graphs.number-of-employees"),
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
      <h3>{t("dashboard.graphs.employee-satisfaction-trend")}</h3>
      <br />
      <Line data={data} options={options} />
    </div>
  );
};

export default SatisfactionLineChart;
