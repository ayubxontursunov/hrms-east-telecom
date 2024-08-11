import PropTypes from 'prop-types';
import './Report.css';

const Report = ({ previous, close, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      reportInfo: {
        ...prevData.reportInfo,
        [name]: value
      }
    }));
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const {supervisor, firstApprover, secondApprover} = formData.reportInfo;
    if (!supervisor || !firstApprover || !secondApprover) {
      alert("Please fill in all fields before proceeding.");
      return;
    }
    
    close(formData);
  };



  return (
    <div className="add-employee-container">
      <form className='report-form' onSubmit={handleFormSubmit}>
        <label className="form-label">Supervisor</label>
        <input
          className='form-input'
          type="text"
          placeholder='Supervisor'
          name='supervisor'
          value={formData.reportInfo.supervisor}
          onChange={handleInputChange}
        />
        <label className="form-label">First Level Approver</label>
        <input
          className='form-input'
          type="text"
          placeholder='First Level Approver'
          name='firstApprover'
          value={formData.reportInfo.firstApprover}
          onChange={handleInputChange}
        />
        <label className="form-label">Second Level Approver</label>
        <input
          className='form-input'
          type="text"
          placeholder='Second Level Approver'
          name='secondApprover'
          value={formData.reportInfo.secondApprover}
          onChange={handleInputChange}
        />
        <div className='form-button-side-container'>
          <button className='form-button-side' type="button" onClick={previous}>Previous</button>
          <button className='form-button-side' type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

Report.propTypes = {
  previous: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default Report;
