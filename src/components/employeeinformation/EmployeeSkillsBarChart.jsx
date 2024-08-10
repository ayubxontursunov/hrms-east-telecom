
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const data = [
  { name: 'Teamwork', skillLevel: 90 },
  { name: 'Problem Solving', skillLevel: 80 },
  { name: 'Adaptability', skillLevel: 75 },
  { name: 'Technical Skills', skillLevel: 95 },
  { name: 'Time Management', skillLevel: 70 },
  { name: 'Leadership', skillLevel: 88 },
  { name: 'Creativity', skillLevel: 78 },
];

// Array of colors for each bar
const COLORS = ['#82ca9d', '#ffc658', '#d88884', '#a4de6c', '#d0ed57', '#8dd1e1', '#83a6ed'];

const EmployeeSkillsBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
        barCategoryGap="10%" // Reduces space between bars
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 11.5 }} />
        <YAxis tick={{ fontSize: 11 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="skillLevel" barSize={40}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EmployeeSkillsBarChart;
