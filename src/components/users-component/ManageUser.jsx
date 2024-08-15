import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ManageUser.css";
import Button from '../../elements/buttonaction/Button';
import Modal from "../all-employee-component/addnewemployee/Modal";
import Key from "../../auth/Key";
import { CiSearch } from "react-icons/ci";

function ManageUser() {
  const { t } = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: "", email: "", role: "" });
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const openModal = (user = null) => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({ id: null, name: "", email: "", role: "" });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (formData.id) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === formData.id ? formData : user
        )
      );
    } else {
      setUsers((prev) => [
        ...prev,
        { ...formData, id: prev.length + 1 },
      ]);
    }
    closeModal();
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="manage-user-container">
      <h3 className="title">{t("dashboard.cards.users")}</h3>
      <div className="create-search-field">
        {Key((state)=>state.isAdmin)? 
          <button onClick={() => openModal()} className="search-field-button">
            {t("button.create")}
          </button> 
          : null
        }
        <div className="all-comp-search-wrap">
          <input
            type="text"
            placeholder={t("button.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-field"
          />
          <CiSearch className="all-comp-search-icon"/>
        </div>
      </div>
      <div className="display-information">
        <div className="wrap-user-content">
        {filteredUsers.map((user) => (
          <ul className="user-content" key={user.id}>
            <li className="user-bar">
              <strong>{t("profile.personal.first-name")}:</strong>{user.name}
            </li>
            <li className="user-bar"><strong>{t("profile.personal.email-address")}:</strong>{user.email}</li>
            <hr />
            <li className="align-center-action">{t("button.action")}</li>
            <li>
              <Button
                onView={()=>handleView(user)}
                onEdit={() => openModal(user)}
                onDelete={() => handleDelete(user.id)}
              />
            </li>
          </ul>
        ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-title">{!formData.id ? t("users.add-user") : t("users.edit-user")}</h2>
        <div className="form-container">
          <label className="form-label">{t("profile.personal.first-name")}</label>
          <input
            placeholder={t("profile.personal.first-name")}
            className="form-input"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label className="form-label">ID</label>
          <input type="text" placeholder="ID" />
          <label className="form-label">{t("profile.personal.email-address")}</label>
          <input
            placeholder={t("profile.personal.email-address")}
            className="form-input"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <label className="form-label">{t("users.role")}</label>
          <input
            placeholder={t("users.role")}
            className="form-input"
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
          <button className="form-button" onClick={handleSave}>{t("button.save")}</button>
        </div>
      </Modal>

      {closediv ? (
        <div className="comp-div-for-display-information-for-all">
          <br />
          <strong>{t("users.user-information")}</strong>
          <br />
          <hr />
          <br />
          <p>
            <strong>{t("profile.personal.first-name")}:</strong>
            {Information.name}
          </p>
          <p>
            <strong>{t("profile.personal.email-address")}:</strong>
            {Information.email}
          </p>
          <p>
            <strong>{t("users.role")}:</strong>
            {Information.role}
          </p>
          <button
            onClick={handleCloseView}
            className="comp-div-for-display-button"
          >
            {t("button.back")}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ManageUser;
