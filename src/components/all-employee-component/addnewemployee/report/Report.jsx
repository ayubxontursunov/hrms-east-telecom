import PropTypes from 'prop-types';
import './Report.css';
import { useTranslation } from 'react-i18next';
const Report = ({ previous, close, formData, setFormData }) => {
  const {t} = useTranslation("global");
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
        <label className="form-label">{t("profile.personal.supervisor")}</label>
        <input
          className='form-input'
          type="text"
          placeholder={t("profile.personal.supervisor")}
          name='supervisor'
          value={formData.reportInfo.supervisor}
          onChange={handleInputChange}
        />
        <label className="form-label">{t("profile.personal.first-level-approver")}</label>
        <input
          className='form-input'
          type="text"
          placeholder={t("profile.personal.first-level-approver")}
          name='firstApprover'
          value={formData.reportInfo.firstApprover}
          onChange={handleInputChange}
        />
        <label className="form-label">{t("profile.personal.second-level-approver")}</label>
        <input
          className='form-input'
          type="text"
          placeholder={t("profile.personal.second-level-approver")}
          name='secondApprover'
          value={formData.reportInfo.secondApprover}
          onChange={handleInputChange}
        />
        <div className='form-button-side-container'>
          <button className='form-button-side' type="button" onClick={previous}>{t("button.previous")}</button>
          <button className='form-button-side' type="submit">{t("button.save")}</button>
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
