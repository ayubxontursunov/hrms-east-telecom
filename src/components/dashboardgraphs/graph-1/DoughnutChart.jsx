import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './DoughnutChart.css';

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DoughnutChart = () => {
  const departmentData = [
    { name: 'Sales', employees: 120 },
    { name: 'Marketing', employees: 100 },
    { name: 'Engineering', employees: 200 },
    { name: 'HR', employees: 60 },
    { name: 'Finance', employees: 80 },
    { name: 'Operations', employees: 80 },
    { name: 'IT', employees: 40 },
    { name: 'Legal', employees: 30 },
  ];

  const totalEmployees = 720;

  const data = {
    labels: departmentData.map((dept) => dept.name),
    datasets: [{
      label: 'Employees by Department',
      data: departmentData.map((dept) => dept.employees),
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6347', '#B0E57C'
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
     <h3>Percentage of Employees by Department</h3>
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
