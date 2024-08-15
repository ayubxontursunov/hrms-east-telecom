import PropTypes from 'prop-types';
import './Contact.css';
import { useTranslation } from 'react-i18next';
const Contact = ({ previous, next, formData, setFormData }) => {
  const {t} = useTranslation("global");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      contactInfo: {
        ...prevData.contactInfo,
        [name]: value
      }
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const { region, phoneNumber, email } = formData.contactInfo;
    if (!region || !phoneNumber || !email) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    next();
  };

  return (
    <div className='add-employee-container'>
      <form className='personal-information-form' onSubmit={handleFormSubmit}>
        <label className="form-label">{t("profile.personal.address")}</label>
        <input
          className='form-input'
          type="text"
          placeholder={t("profile.personal.address")}
          name='region'
          value={formData.contactInfo.region}
          onChange={handleInputChange}
        />
        <label className="form-label">{t("profile.personal.phone-number")}</label>
        <input
          className='form-input'
          type="text"
          placeholder={t("profile.personal.phone-number")}
          name='phoneNumber'
          value={formData.contactInfo.phoneNumber}
          onChange={handleInputChange}
        />
        <label className='form-label'>{t("profile.personal.email-address")}</label>
        <input
          className='form-input'
          type="email"
          placeholder={t("profile.personal.email-address")}
          name='email'
          value={formData.contactInfo.email || ''}
          onChange={handleInputChange}
        />
        <div className='form-button-side-container'>
          <button className='form-button-side' type="button" onClick={previous}>{t("button.previous")}</button>
          <button className='form-button-side' type="submit">{t("button.next")}</button>
        </div>
      </form>
    </div>
  );
};

Contact.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default Contact;
