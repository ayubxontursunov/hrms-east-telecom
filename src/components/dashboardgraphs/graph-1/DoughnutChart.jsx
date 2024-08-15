import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './DoughnutChart.css';
import { useTranslation } from 'react-i18next';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const DoughnutChart = () => {
  const {t} = useTranslation("global");
  const departmentData = [
    { name: t("dashboard.graphs.sales"), employees: 120 },
    { name: t("dashboard.graphs.marketing"), employees: 100 },
    { name: t("dashboard.graphs.engineering"), employees: 200 },
    { name: t("dashboard.graphs.hr"), employees: 60 },
    { name: t("dashboard.graphs.finance"), employees: 80 },
    { name: t("dashboard.graphs.operations"), employees: 80 },
    { name: t("dashboard.graphs.it"), employees: 40 },
    { name: t("dashboard.graphs.legal"), employees: 30 },
  ];

  const totalEmployees = 720;

  const data = {
    labels: departmentData.map((dept) => dept.name),
    datasets: [{
      label: t("dashboard.graphs.percentage-of-employees-by-department"),
      data: departmentData.map((dept) => dept.employees),
      backgroundColor: [
        '#851C1F', '#E74C3C', '#FFD700', '#1E90FF', '#FF6347',
        '#4BC0C0', '#8A2BE2', '#00FA9A'
      ],
      hoverOffset: 4,
    }],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const department = departmentData[tooltipItem.dataIndex];
            const percentage = ((department.employees / totalEmployees) * 100).toFixed(1); // 1 decimal place
            return `${department.name}: ${percentage}%`;
          }
        }
      },
      legend: {
        display: false, // Hide default legend
      },
      datalabels: {
        color: '#fff',
        formatter: (value) => {
          const percentage = ((value / totalEmployees) * 100).toFixed(1); // 1 decimal place
          return `${percentage}%`;
        },
        font: {
          weight: 'bold',
        }
      }
    },
    maintainAspectRatio: false, // Allow custom sizing
  };

  return (
    <div className="doughnut-chart-wrapper">
     <h3>{t("dashboard.graphs.percentage-of-employees-by-department")}</h3>
     <br />
      <div className="doughnut-chart-container">
        <Doughnut data={data} options={options} />
      </div>
      <div className="legend-container">
        {departmentData.map((dept, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color-box"
              style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
            ></span>
            <span className="legend-label">{dept.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
