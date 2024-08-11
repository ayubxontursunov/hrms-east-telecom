import "./Projects.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Updated fake data with the renamed "number of employees working" field
const data = [
  { name: "Alpha Tech Upgrade", budget: 40000, completion: 75, "number of employees working": 10 },
  { name: "Beta Cloud Migration", budget: 30000, completion: 50, "number of employees working": 8 },
  { name: "Gamma Security Enhancement", budget: 50000, completion: 90, "number of employees working": 12 },
  { name: "Delta AI Integration", budget: 45000, completion: 65, "number of employees working": 9 },
];

const ProjectBarChart = () => {
  return (
     <div className="project-barchart-container">
          <h3>Projects on the process</h3>
          <br />
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="budget" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="completion" fill="#82ca9d" />
        <Bar yAxisId="right" dataKey="number of employees working" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default ProjectBarChart;
