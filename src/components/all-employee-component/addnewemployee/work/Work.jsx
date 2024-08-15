import PropTypes from 'prop-types';
import './Work.css'
import { useTranslation } from 'react-i18next';
const Work = ({ next, previous, formData, setFormData }) => {
  const {t} = useTranslation("global");
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
          <label className='form-label'>{t("profile.personal.job-type")}</label>
          <label className='form-label'>{t("profile.personal.duty")}</label>
        </div>
        <div className='form-input-group-wrap'>
          <input
            className="form-input-group"
            type="text"
            placeholder={t("profile.personal.job-type")}
            name='employmentType'
            value={formData.workInfo.employmentType}
            onChange={handleInputChange}
          />
          <input
            className="form-input-group"
            type="text"
            placeholder={t("profile.personal.duty")}
            name='duty'
            value={formData.workInfo.duty}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-wrap">
          <label className='form-label'>{t("profile.personal.department")}</label>
          <label className='form-label'>{t("profile.personal.team")}</label>
        </div>
        <div className='form-input-group-wrap'>
          <input
            className="form-input-group"
            type="text"
            placeholder={t("profile.personal.department")}
            name='department'
            value={formData.workInfo.department}
            onChange={handleInputChange}
          />
          <input
            className="form-input-group"
            type="text"
            placeholder={t("profile.personal.team")}
            name='team'
            value={formData.workInfo.team}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-wrap">
          <label className='form-label'>{t("profile.personal.job-title")}</label>
          <label className='form-label'>{t("profile.personal.wages")}</label>
        </div>
        <div className='form-input-group-wrap'>
          <input
            className="form-input-group"
            type="text"
            placeholder={t("profile.personal.job-title")}
            name='jobTitle'
            value={formData.workInfo.jobTitle}
            onChange={handleInputChange}
          />
          <input
            className="form-input-group"
            type="text"
            placeholder={t("profile.personal.wages")}
            name='wages'
            value={formData.workInfo.wages}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-wrap">
          <label className='form-label'>{t("profile.personal.division")}</label>
          <label className='form-label'>{t("profile.personal.education")}</label>
        </div>
        <div className='form-input-group-wrap'>
          <input
            className="form-input-group form-input-group-date"
            type="text"
            placeholder={t("profile.personal.division")}
            name='joinedDate'
            value={formData.workInfo.joinedDate}
            onChange={handleInputChange}
          />
          <input
            className="form-input-group"
            type="text"
            placeholder={t("profile.personal.education")}
            name='education'
            value={formData.workInfo.education}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-button-side-container'>
          <button className='form-button-side' type="button" onClick={previous}>{t("button.previous")}</button>
          <button className='form-button-side' type="submit">{t("button.next")}</button>
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
