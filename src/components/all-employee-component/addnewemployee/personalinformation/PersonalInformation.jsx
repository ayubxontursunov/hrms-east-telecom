import PropTypes from 'prop-types';
import './PersonalInformation.css';
import { useTranslation } from 'react-i18next';
const PersonalInformation = ({ next, formData, setFormData}) => {
  const {t} = useTranslation("global");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value
      }
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const { firstName, lastName, dateOfBirth, maritalStatus } = formData.personalInfo;
    if (!firstName || !lastName || !dateOfBirth || !maritalStatus) {
      alert("Please fill in all fields before proceeding.");
      return;
    }
    next()
  };

  return (
    <div className='add-employee-container'>
      <form className='personal-information-form' onSubmit={handleFormSubmit}>
        <label className="form-label">{t("profile.personal.first-name")}</label>
        <input
          className='form-input'
          type='text'
          placeholder={t("profile.personal.first-name")}
          name='firstName'
          value={formData.personalInfo.firstName}
          onChange={handleInputChange}
        />
        <label className="form-label">{t("profile.personal.last-name")}</label>
        <input
          className='form-input'
          type='text'
          placeholder={t("profile.personal.last-name")}
          name='lastName'
          value={formData.personalInfo.lastName}
          onChange={handleInputChange}
        />
        <label className="form-label">{t("profile.personal.date-of-birth")}</label>
        <input
          className='form-input'
          type='date'
          placeholder={t("profile.personal.date-of-birth")}
          name='dateOfBirth'
          value={formData.personalInfo.dateOfBirth}
          onChange={handleInputChange}
        />
        <label className="form-label">{t("profile.personal.marital-status")}</label>
        <input
          className='form-input'
          type='text'
          placeholder={t("profile.personal.marital-status")}
          name='maritalStatus'
          value={formData.personalInfo.maritalStatus}
          onChange={handleInputChange}
        />

        <button className='form-button' type='submit'>
        {t("button.next")}
        </button>
      </form>
    </div>
  );
};

PersonalInformation.propTypes = {
  next: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default PersonalInformation;
