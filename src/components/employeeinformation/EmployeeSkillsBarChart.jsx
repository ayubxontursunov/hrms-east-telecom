import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import PropTypes from 'prop-types';
const COLORS = ['#82ca9d', '#ffc658', '#d88884', '#a4de6c', '#d0ed57', '#8dd1e1', '#83a6ed'];
const DEFAULT_DATA = [
  { name: 'Adaptability', skillLevel: 75 },
  { name: 'Creativity', skillLevel: 78 },
  { name: 'Leadership', skillLevel: 88 },
  { name: 'Problem Solving', skillLevel: 80 },
  { name: 'Technical Skills', skillLevel: 72 },
  { name: 'Teamwork', skillLevel: 90 },
  { name: 'Time Management', skillLevel: 65 },
];

const EmployeeSkillsBarChart = ({ data = DEFAULT_DATA }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}  // Adjusted left margin
        barCategoryGap="20%"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={0} />
        <YAxis
          tick={{ fontSize: 11 }}
          domain={[0, 100]}  // Set the Y-axis domain to scale from 0 to 100%
          tickFormatter={(value) => `${value}%`}  // Format Y-axis labels as percentages
        />
        <Tooltip
          formatter={(value) => `${value}%`}  // Format tooltip values as percentages
        />
        <Bar dataKey="skillLevel" barSize={40}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

// Define PropTypes
EmployeeSkillsBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      skillLevel: PropTypes.number.isRequired,
    })
  )
};

export default EmployeeSkillsBarChart;
