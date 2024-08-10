import PropTypes from 'prop-types';
import './UserCard.css'; // Import the relevant CSS for styling

const UserCard = ({ employee }) => {
  return (
    <div className="user-card">
      <img className="user-card-image" src={employee.personalInfo.img} alt={`${employee.personalInfo.firstName} ${employee.personalInfo.lastName}`} />
      <h3 className="user-card-name">{employee.personalInfo.firstName} {employee.personalInfo.lastName}</h3>
      <p><strong>Department:</strong> {employee.workInfo.department}</p>
      <p><strong>Division:</strong> {employee.workInfo.team}</p>
      <p><strong>Job Title:</strong> {employee.workInfo.jobTitle}</p>
      <p><strong>Email:</strong> {employee.contactInfo.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

UserCard.propTypes = {
  employee: PropTypes.shape({
    personalInfo: PropTypes.shape({
      img: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    workInfo: PropTypes.shape({
      department: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
    }).isRequired,
    contactInfo: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserCard;
