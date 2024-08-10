
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




const ProfileComponent = () => {
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
                <p>First Name</p>
                <h4>Brooklyn</h4>
              </div>
              <div className="col move-left">
                <p>Last Name</p>
                <h4>Simmons</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Mobile Number</p>
                <h4>(702) 555-0122</h4>
              </div>
              {/* <div className="col">
                <p>Mobile Number</p>
                <h4>(702) 555-0122</h4>
              </div> */}
              <div className="col move-left">
                <p>Email Address</p>
                <h4>lisa@gmail.com</h4>
              </div>

            </div>
            <div className="row">
              <div className="col">
                <p>Date of Birth</p>
                <h4>July 14,1995</h4>
              </div>
              <div className="col move-left">
                <p>Marital Status</p>
                <h4>Married</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Gender</p>
                <h4>Female</h4>
              </div>
              <div className="col move-left">
                <p>Nationality</p>
                <h4>America</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>Address</p>
                <h4>2464 Royal Ln. Mesa, New Jersey</h4>
              </div>
              <div className="col move-left">
                <p>City</p>
                <h4>California</h4>
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
                <p>LDAP username</p>
                <h4>brooklyn_simmons</h4>
              </div>
              <div className="col move-left">
                <p>Email Address</p>
                <h4>brooklyn@example.com</h4>
              </div>
            </div>


            <div className="row">
              <div className="col">
                <p>Employee Type</p>
                <h4>Office</h4>
              </div>
              <div className="col move-left">
                <p>Position</p>
                <h4>Product Manager</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>Department</p>
                <h4>New Biz</h4>
              </div>
              <div className="col move-left">
                <p>Rank</p>
                <h4>Senior</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>Division</p>
                <h4>IT Biz</h4>
              </div>
              <div className="col move-left">
                <p>Duty</p>
                <h4>E-commerce Platform</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>Team</p>
                <h4>Product Management</h4>
              </div>
              <div className="col move-left">
                <p>Wages</p>
                <h4>$2500</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Education</p>
                <h4>Westminister university, IT business faculty</h4>
              </div>
              <div className="col move-left">
                <p>Work Experience</p>
                <h4>+5 years</h4>
              </div>


            </div>
            <div className="row">
              <div className="col">
                <p>Working Days</p>
                <h4>5 Days</h4>
              </div>
              <div className="col move-left">
                <p>Hobbies</p>
                <h4>Reading, Swimming</h4>
              </div>

            </div>
            <div className="row">
              <div className="col">
                <p>Office Location</p>
                <h4>2464 Royal Ln. Mesa, New Jersey</h4>
              </div>
              <div className="col move-left">
                <p>Joining Date</p>
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
              <span className="document-title">CV Resume.pdf</span>
              <div className="document-actions">
                <GrFormView className="icon" onClick={viewDocument} />
                <MdOutlineFileDownload className="icon" onClick={downloadDocument} />
              </div>
            </div>
            <div className="document-item">
              <span className="document-title">Certificates.pdf</span>
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
                <p>Outlook address</p>
                <h4>lisa@outlook.com</h4>
              </div>
              <div className="col move-left">
                <p>LDAP ID</p>
                <h4>Simmons</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Phone Number</p>
                <h4>+998977586878</h4>
              </div>
              <div className="col move-left">
                <p>LinkedIn</p>
                <h4>Lisa Simons</h4>
              </div>
            </div>
            {/* Add remaining fields similarly */}
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
          <h3 className='grid_item1'>Brooklyn Simmons</h3>
          <p className='grid_item2'>Project Manager</p>
          <p className='grid_item3'>lisa@gmail.com</p>
        </div>
        <div><DropdownContainer /></div>


      </div>
      {/* <div className="profile-tabs">
        <button onClick={() => setActiveTab('personal')}><FaRegUser style={{ margin: '2px 6px 0 8px' }} />  Personal Information</button>
        <button onClick={() => setActiveTab('professional')}><MdWorkOutline style={{ margin: '2px 6px 0 8px' }} />Professional Information</button>
        <button onClick={() => setActiveTab('documents')}><FaRegFileAlt style={{ margin: '2px 6px 0 8px' }} />Documents</button>
        <button onClick={() => setActiveTab('account')}><MdOutlineSupervisorAccount style={{ margin: '2px 6px 0 8px' }} />Account Access</button>
      </div> */}
      <div className="profile-tabs">
        <button id="button-profile" className={activeTab === 'personal' ? 'active' : ''} onClick={() => setActiveTab('personal')}>
          <FaRegUser style={{ marginRight: '8px' }} />
          Personal Information
        </button>
        <button id="button-profile" className={activeTab === 'professional' ? 'active' : ''} onClick={() => setActiveTab('professional')}>
          <MdWorkOutline style={{ marginRight: '8px' }} />
          Professional Information
        </button>
        <button id="button-profile" className={activeTab === 'documents' ? 'active' : ''} onClick={() => setActiveTab('documents')}>
          <FaRegFileAlt style={{ marginRight: '8px' }} />
          Documents
        </button>
        <button id="button-profile" className={activeTab === 'account' ? 'active' : ''} onClick={() => setActiveTab('account')}>
          <MdOutlineSupervisorAccount style={{ marginRight: '8px' }} />
          Account Access
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default ProfileComponent;
