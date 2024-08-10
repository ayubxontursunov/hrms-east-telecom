import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./AnnouncementCard.css"
function AnnouncementCard({ date, title, desc, link}) {
  const [t] = useTranslation("global");
  return (
    <div className="announcement">
      <h3 className="announcement-date">{date}</h3>
      <h3 className="announcement-title">{title}</h3>
      <span className="announcement-desc-wrap">
      <span className="announcement-desc">{desc}</span>
      </span>
      <a href={link} className="announcement-link">
        <span>{t("dashboard.bottom.details")}</span>
      </a>
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
