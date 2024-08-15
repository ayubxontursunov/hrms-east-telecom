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
  { name: "Alpha Tech Upgrade", completion: 75, "number of employees working": 10 },
  { name: "Beta Cloud Migration", completion: 50, "number of employees working": 8 },
  { name: "Gamma Security Enhancement", completion: 90, "number of employees working": 12 },
  { name: "Delta AI Integration", completion: 65, "number of employees working": 9 },
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
          {/* Move completion to the left */}
          <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
          {/* Number of employees working can remain on the right */}
          <YAxis yAxisId="right" orientation="right" stroke="#ffc658" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="completion" fill="#82ca9d" />
          <Bar yAxisId="right" dataKey="number of employees working" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectBarChart;
