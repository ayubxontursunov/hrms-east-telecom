import PropTypes from 'prop-types';
import './Documents.css';
import { useTranslation } from 'react-i18next';
const Documents = ({ next, previous, setFormData }) => {
  const {t} = useTranslation("global");
  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      documents: [...prevData.documents, ...files]
    }));
  };

  return (
    <div className='add-employee-container'>
      <form className='doc-form'>
        <label className="form-label">{t("profile.personal.license")}</label>
        <input className='form-input' type="file" onChange={handleFileChange} />
        <label className="form-label">{t("profile.personal.cv-doc")}</label>
        <input className='form-input' type="file" onChange={handleFileChange} />
        <div className='form-button-side-container'>
          <button className='form-button-side' type="button" onClick={previous}>{t("button.previous")}</button>
          <button className='form-button-side' type="button" onClick={next}>{t("button.next")}</button>
        </div>
      </form>
    </div>
  );
};

Documents.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default Documents;
