import PropTypes from 'prop-types';
import './Work.css'

const Work = ({ next, previous, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      workInfo: {
        ...prevData.workInfo,
        [name]: value
      }
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const {employmentType, duty, department, team, jobTitle, wages, joinedDate, education} = formData.workInfo;
    if (!employmentType || !duty || !department || !team || !jobTitle || !wages || !joinedDate || !education) {
      alert("Please fill in all fields before proceeding.");
      return;
    }
    
    next();
  };

  return (
    <div className='add-employee-container'>
      <form className='work-form' onSubmit={handleFormSubmit}>
        <div className="label-wrap">
          <label className='form-label'>Job Type</label>
          <label className='form-label'>Duty</label>
        </div>
        <div className='form-input-group-wrap'>
          <input
            className="form-input-group"
            type="text"
            placeholder='Full | Part | Intern...'
            name='employmentType'
            value={formData.workInfo.employmentType}
            onChange={handleInputChange}
          />
          <input
            className="form-input-group"
            type="text"
            placeholder='Duty'
            name='duty'
            value={formData.workInfo.duty}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-wrap">
          <label className='form-label'>Department</label>
          <label className='form-label'>Team</label>
        </div>
        <div className='form-input-group-wrap'>
          <input
            className="form-input-group"
            type="text"
            placeholder='Department'
            name='department'
            value={formData.workInfo.department}
            onChange={handleInputChange}
          />
          <input
            className="form-input-group"
            type="text"
            placeholder='Team'
            name='team'
            value={formData.workInfo.team}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-wrap">
          <label className='form-label'>Job Title</label>
          <label className='form-label'>Wages</label>
        </div>
        <div className='form-input-group-wrap'>
          <input
            className="form-input-group"
            type="text"
            placeholder='Job title'
            name='jobTitle'
            value={formData.workInfo.jobTitle}
            onChange={handleInputChange}
          />
          <input
            className="form-input-group"
            type="text"
            placeholder='Wages'
            name='wages'
            value={formData.workInfo.wages}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-wrap">
          <label className='form-label'>Joined Date</label>
          <label className='form-label'>Education</label>
        </div>
        <div className='form-input-group-wrap'>
          <input
            className="form-input-group form-input-group-date"
            type="text"
            placeholder='Joined Date'
            name='joinedDate'
            value={formData.workInfo.joinedDate}
            onChange={handleInputChange}
          />
          <input
            className="form-input-group"
            type="text"
            placeholder='Education'
            name='education'
            value={formData.workInfo.education}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-button-side-container'>
          <button className='form-button-side' type="button" onClick={previous}>Previous</button>
          <button className='form-button-side' type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

Work.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default Work;
