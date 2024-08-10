import { useTranslation } from "react-i18next";
import createData1 from "./Data1.js";
import createData2 from "./Data2.js";
import createData3 from "../../elements/announcementcard/Data.js";
import ItemCard from "../../elements/itemcard/ItemCard.jsx";
import "./Dashboard.css";
import CalendarComponent from "../../elements/calendarpicker/Calendarpicker.jsx";
import AnnouncementCard from "../../elements/announcementcard/AnnouncementCard.jsx";
import { IoIosArrowForward } from "react-icons/io";
function Dashboard() {
  const { t } = useTranslation("global");
  const data1 = createData1(t);
  const data2 = createData2(t);
  const data3 = createData3(t);
  return (
    <div>
      <div className="grid-container">
        {Object.keys(data1).map((key) => {
          const item = data1[key];
          return (
            <ItemCard 
              color={item.id==1?"#434242":item.id==2?"#E31E24":item.id==3?"#233B54":"#55AB7A"}
              key={key}
              title={item.title}
              label={item.label}
              img={item.img}
              link={item.link}
            />
          );
        })}
      </div>
      <div className="middle-container">
        <div className="middle-right">
          <h3 className="middle-title">{t("dashboard.middle.approval")}</h3>
          <ul className="middle-list-grid">
            <li>{t("dashboard.middle.date")}</li>
            <li>{t("dashboard.middle.type")}</li>
            <li>{t("dashboard.middle.duration")}</li>
            <li>{t("dashboard.middle.status")}</li>
          </ul>
          <div className="right-grid">
            {Object.keys(data2).map((key) => (
              <ul
                key={key}
                className={`ul-grid ${
                  data2[key].id % 2 == 1 ? "ul-grid-color" : ""
                }`}
              >
                <li>{data2[key].date}</li>
                <li>{data2[key].type}</li>
                <li>{data2[key].duration}</li>
                <li
                  className={`ul-grid-item ${
                    data2[key].status_check === "approved"
                      ? "approved-item"
                      : data2[key].status_check === "pending"
                      ? "pending-item"
                      : data2[key].status_check === "rejected"
                      ? "rejected-item"
                      : ""
                  }`}
                >
                  {data2[key].status}
                </li>
              </ul>
            ))}
          </div>
          <ul className="middle-right-bottom-ul">
            <li className="item-1">{t("dashboard.middle.status-approved")}</li>
            <li className="item-2">{t("dashboard.middle.status-rejected")}</li>
            <li className="item-3">{t("dashboard.middle.status-pending")}</li>
          </ul>
        </div>
        <div className="middle-left">
          <CalendarComponent />
        </div>
      </div>
      <div className="middle-container">
        <div className="announcement-page">
          <span className="announcement-wrap">
            <span className="announcement-title">
              {t("sidebar.announcement")}
            </span>
            <a href="#notsetyet" className="announcement-wrap-link">
              {t("dashboard.first-section.link")}
            </a>
            <IoIosArrowForward className="announcement-wrap-icon" />
          </span>
          {data3.map((data) => (
            <AnnouncementCard
              key={data.id}
              date={data.date}
              title={data.title}
              desc={data.desc}
              link={data.link}
            />
          ))}
        </div>
        <div className="announcement-page">
          <span className="announcement-wrap">
            <span className="announcement-title">
              {t("sidebar.training")}
            </span>
            <a href="#notsetyet" className="announcement-wrap-link">
              {t("dashboard.first-section.link")}
            </a>
            <IoIosArrowForward className="announcement-wrap-icon" />
          </span>
          {data3.map((data) => (
            <AnnouncementCard
              key={data.id}
              date={data.date}
              title={data.title}
              desc={data.desc}
              link={data.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
