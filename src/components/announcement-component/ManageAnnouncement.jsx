import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ManageAnnouncement.css";
import Button from "../../elements/buttonaction/Button";
import Modal from "../all-employee-component/addnewemployee/Modal";
import Key from "../../auth/Key";
import { CiSearch } from "react-icons/ci";
function ManageAnnouncement() {
  const { t } = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, titleName: "", descName: "", expireDate: "" });
  const [announcements, setAnnouncements] = useState([
    { id: 1, titleName: "New Year Holiday", descName: "Happy New Year", expireDate: "2025-01-10" },
    { id: 2, titleName: "Electricity Switch Off", descName: "This coming Wednesday", expireDate: "2024-10-08" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
  };

  const openModal = (announcement = null) => {
    if (announcement) {
      setFormData(announcement);
    } else {
      setFormData({ id: null, titleName: "", descName: "", expireDate: "" });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (formData.id) {
      setAnnouncements((prev) =>
        prev.map((announcement) =>
          announcement.id === formData.id ? formData : announcement
        )
      );
    } else {
      setAnnouncements((prev) => [
        ...prev,
        { ...formData, id: prev.length + 1 },
      ]);
    }
    closeModal();
  };

  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.titleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.descName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [closediv, setClosediv] = useState(false);
  const [Information, setInformation] = useState({});
  const handleView = (info) => {
    setClosediv(!closediv);
    setInformation(info);
  };
  const handleCloseView = () => {
    setClosediv(!closediv);
  };

  return (
    <div className="manage-announcement-container">
      <h3 className="title">{t("announcement.announcement-admin-title")}</h3>
      <div className="create-search-field">
        {Key((state)=>state.isAdmin)?        <button onClick={() => openModal()} className="search-field-button">
          {t("button.create")}
        </button>:null}
        <div className="all-comp-search-wrap">
        <input
          type="text"
          placeholder={t("search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-field"
        />
          <CiSearch className="all-comp-search-icon"/>
        </div>
      </div>
      <div className="display-information">
        <ul className="announcement-grid">
          <li className="separate-bar">{t("announcement.announcement-title-show")}</li>
          <li className="separate-bar">{t("announcement.announcement-description-show")}</li>
          <li className="locate-center">{t("announcement.action")}</li>
        </ul>
        {filteredAnnouncements.map((announcement) => (
          <ul className="announcement-content" key={announcement.id}>
            <li className="separate-bar">{announcement.titleName}</li>
            <li className="separate-bar">{announcement.descName}</li>
            <li>
              <Button
              onView={()=>handleView(announcement)}
                onEdit={() => openModal(announcement)}
                onDelete={() => handleDelete(announcement.id)}
              />
            </li>
          </ul>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        
          <h2 className="modal-title">{!formData.id?"Create a New Announcement":"Edit an Announcement"}</h2>
        <div className="form-container">
          <label className="form-label">Title</label>
          <input placeholder="Title" className="form-input"
            type="text"
            value={formData.titleName}
            onChange={(e) => setFormData({ ...formData, titleName: e.target.value })}
          />
          <label className="form-label">Description</label>
          <input placeholder="Description" className="form-input"
            type="text"
            value={formData.descName}
            onChange={(e) => setFormData({ ...formData, descName: e.target.value })}
          />
          <label className="form-label">Expire Date</label>
          <input className="form-input"
            type="date"
            value={formData.expireDate}
            onChange={(e) => setFormData({ ...formData, expireDate: e.target.value })}
          />
          <button className="form-button" onClick={handleSave}>Save</button>
        </div>
      </Modal>
      {closediv ? (
        <div className="comp-div-for-display-information-for-all">
          <br />
          <strong>Announcement Information</strong>
          <br />
          <hr />
          <br />
          <p>
            <strong>Title:</strong>
            {Information.titleName}
          </p>
          <p>
            <strong>Description:</strong>
            {Information.descName}
          </p>
          <button
            onClick={handleCloseView}
            className="comp-div-for-display-button"
          >
            Back
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ManageAnnouncement;