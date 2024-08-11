import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./AnnouncementCard.css"
import {Link} from 'react-router-dom'
function AnnouncementCard({ date, title, desc, link}) {
  const [t] = useTranslation("global");
  return (
    <div className="announcement">
      <h3 className="announcement-date">{date}</h3>
      <h3 className="announcement-title">{title}</h3>
      <span className="announcement-desc-wrap">
      <span className="announcement-desc">{desc}</span>
      </span>
      <Link to={link} className="announcement-link">
        <span>{t("dashboard.bottom.details")}</span>
      </Link>
    </div>
  );
}

AnnouncementCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
};

export default AnnouncementCard;
