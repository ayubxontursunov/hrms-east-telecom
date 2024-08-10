import "./Header.css";
import { GrLanguage } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Key from "../../auth/Key";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import profileImg from "../../image/profile2.jpg";
import { Link } from "react-router-dom";
function Header() {
  const setLanguage = Key((state)=>state.setLanguage);
  const { i18n } = useTranslation("global");
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  }; 

  const setIsLogin = Key((state) => state.setIsLogin);
  const setIsAdmin = Key((state) => state.setIsAdmin);
  const navigate = useNavigate();
  const handleLeave = () => {
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/login");
  };
  const [closediv, setClosediv]=useState(false);
  // const []
  const handleopenProfile = ()=>{
    navigate("/home/profile");
    setClosediv(!closediv);
  }
  const handleProfileClick = ()=>{
    setClosediv(!closediv);
  }
  const handleNotification = ()=>{
    navigate("/home/notification-alert");
  }
  return (
    <div className="header">
        <Link to="/home/about-hrms" className="logo-title">HRMS</Link>
      <div className="header-wrap">
        <form className="custom-select-wrapper">
          <GrLanguage className="icon-language"/>
          <select id="languages" name="languages" className="custom-select" onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">English</option>
            <option value="uz">Oʻzbekcha</option>
            <option value="ru">Русский</option>
            <option value="ko">한국어</option>
          </select>
        </form>
        <IoMdNotificationsOutline onClick={handleNotification} className="header-icon-notification"/>
        <div className="profile-icon-wrap-container">
        <img onClick={handleProfileClick} src={profileImg} className="profile-img-header" alt="profile-img" />
          <ul className={`profile-icon-wrap-container-ul ${!closediv?"close-wrap-ul":"open-wrap-ul"}`}>
            <li onClick={handleopenProfile} className="profile-icon-wrap-container-item">Profile</li>
            <li onClick={handleLeave} className="profile-icon-wrap-container-item">Log Out</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Header;
