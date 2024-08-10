import "./ItemCard.css";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ItemCard({ title, label, img, link,color}) {
  const [t] = useTranslation("global");
  return (
    <div style={{background:color}} className="item-card">
      <img src={img} alt={title} className="item-image" />
      <h3 className="item-title">{title}</h3>
      <p className="item-label">{label}</p>
      <Link to={link} className="item-link">
        <span>{t("dashboard.first-section.link")}</span>
        <IoIosArrowForward className="icon-view" />
      </Link>
    </div>
  );
}

ItemCard.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
};

export default ItemCard;
