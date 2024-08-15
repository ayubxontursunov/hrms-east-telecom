
import { useState } from 'react';
import './Profile.css';
import Profile from '../../image/profile2.jpg'
import DropdownContainer from '../dropdown/Dropdown';
import { FaRegUser } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import { useTranslation } from "react-i18next";



const ProfileComponent = () => {
  const {t} = useTranslation("global");
  const [activeTab, setActiveTab] = useState('personal');
  const viewDocument = () => {
    // Logic to view the document
    console.log("View document");
  };

  const downloadDocument = () => {
    // Logic to download the document
    console.log("Download document");
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="tab-content">
            <div className="row">
              <div className="col">
                <p>{t("profile.personal.first-name")}</p>
                <h4>Lisa</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.last-name")}</p>
                <h4>Simmons</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{t("profile.personal.date-of-birth")}</p>
                <h4>July 14,1995</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.marital-status")}</p>
                <h4>Married</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{t("profile.personal.address")}</p>
                <h4>Tashkent</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.nationality")}</p>
                <h4>English</h4>
              </div>
            </div>

            
            {/* Add remaining fields similarly */}
          </div>
        );
      case 'professional':
        return (
          <div className="tab-content">

            <div className="row">
              <div className="col">
                <p>{t("profile.personal.job-type")}</p>
                <h4>Full Type</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.job-title")}</p>
                <h4>Product Manager</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>{t("profile.personal.department")}</p>
                <h4>New Biz</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.education")}</p>
                <h4>Bachelor</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>{t("profile.personal.division")}</p>
                <h4>IT Biz</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.duty")}</p>
                <h4>E-commerce Platform</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>{t("profile.personal.team")}</p>
                <h4>Product Management</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.wages")}</p>
                <h4>$2500</h4>
              </div>
            </div>
            
            <div className="row">
              <div className="col">
                <p>{t("profile.personal.supervisor")}</p>
                <h4>Jonatan Smith</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.joined-date")}</p>
                <h4>July 10,2022</h4>
              </div>
            </div>


            {/* Add remaining fields similarly */}
          </div>
        );
      case 'documents':
        return (
          <div className="documents-container">
            <div className="document-item">
              <span className="document-title">{t("profile.personal.cv-doc")}</span>
              <div className="document-actions">
                <GrFormView className="icon" onClick={viewDocument} />
                <MdOutlineFileDownload className="icon" onClick={downloadDocument} />
              </div>
            </div>
            <div className="document-item">
              <span className="document-title">{t("profile.personal.license")}</span>
              <div className="document-actions">
                <GrFormView className="icon" onClick={viewDocument} />
                <MdOutlineFileDownload className="icon" onClick={downloadDocument} />
              </div>
            </div>
            {/* <!-- Add more document-item elements as needed --> */}
          </div>

        );
      case 'account':
        return (
          <div className="tab-content">
            <div className="row">
              <div className="col">
                <p>{t("profile.personal.phone-number")}</p>
                <h4>+998977586878</h4>
              </div>
              <div className="col move-left">
                <p>{t("profile.personal.email-address")}</p>
                <h4>lisa@gmail.com</h4>
              </div>
            </div>
            {/*Add remaining fields similarly */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={Profile} alt="Profile" className="profile-image" />
        <div className='userinfo_prof'>
          <h3 className='grid_item1'>Lisa Simmons</h3>
          <p className='grid_item2'>Project Manager</p>
          <p className='grid_item3'>lisa@gmail.com</p>
        </div>
        <div><DropdownContainer /></div>


      </div>
      
      <div className="profile-tabs">
        <button id="button-profile" className={activeTab === 'personal' ? 'active' : ''} onClick={() => setActiveTab('personal')}>
          <FaRegUser style={{ marginRight: '8px' }} />
          {t("profile.heading.personal")}
        </button>
        <button id="button-profile" className={activeTab === 'professional' ? 'active' : ''} onClick={() => setActiveTab('professional')}>
          <MdWorkOutline style={{ marginRight: '8px' }} />
          {t("profile.heading.professional")}
        </button>
        <button id="button-profile" className={activeTab === 'documents' ? 'active' : ''} onClick={() => setActiveTab('documents')}>
          <FaRegFileAlt style={{ marginRight: '8px' }} />
          {t("profile.heading.documents")}
        </button>
        <button id="button-profile" className={activeTab === 'account' ? 'active' : ''} onClick={() => setActiveTab('account')}>
          <MdOutlineSupervisorAccount style={{ marginRight: '8px' }} />
          {t("profile.heading.account")}
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default ProfileComponent;
