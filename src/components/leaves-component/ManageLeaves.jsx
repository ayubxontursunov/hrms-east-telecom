import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ManageLeaves.css";
import Button from "../../elements/buttonaction/Button";
import Modal from "../all-employee-component/addnewemployee/Modal";
import Key from "../../auth/Key";
import { CiSearch } from "react-icons/ci";

function ManageLeave() {
  const { t } = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    employeeName: "",
    dateOfApplication: "",
    applicationType: "",
    duration: "",
    status: "pending",
  });
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      employeeName: "Lisa Steven",
      dateOfApplication: "2024-08-01",
      applicationType: "Casual Leave",
      duration: "3 days",
      status: "pending",
    },
    {
      id: 2,
      employeeName: "Jane Steven",
      dateOfApplication: "2024-07-20",
      applicationType: "Late Entries",
      duration: "5 days",
      status: "approved",
    },
    {
      id: 3,
      employeeName: "Simon Smith",
      dateOfApplication: "2024-07-20",
      applicationType: "Sick Leave",
      duration: "5 days",
      status: "rejected",
    },
    {
      id: 4,
      employeeName: "Jordan Steven",
      dateOfApplication: "2024-07-20",
      applicationType: "Casual Leave",
      duration: "5 days",
      status: "rejected",
    },
    {
      id: 5,
      employeeName: "Nick Steven",
      dateOfApplication: "2024-07-20",
      applicationType: "Late Entries",
      duration: "5 days",
      status: "approved",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // Check if the user is an admin
  const isAdmin = Key((state) => state.isAdmin);

  const handleDelete = (id) => {
    setLeaves(leaves.filter((leave) => leave.id !== id));
  };

  const openModal = (leave = null) => {
    if (leave) {
      setFormData(leave);
    } else {
      setFormData({
        id: null,
        employeeName: "",
        dateOfApplication: "",
        applicationType: "",
        duration: "",
        status: "pending",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (formData.id) {
      setLeaves((prev) =>
        prev.map((leave) => (leave.id === formData.id ? formData : leave))
      );
    } else {
      setLeaves((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
    }
    closeModal();
  };

  const filteredLeaves = leaves.filter(
    (leave) =>
      leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leave.applicationType.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [closediv, setClosediv] = useState(false);
  const [leaveInformation, setLeaveInformation] = useState({});
  const handleView = (leave) => {
    setClosediv(!closediv);
    setLeaveInformation(leave);
  };
  const handleCloseView = () => {
    setClosediv(!closediv);
  };
  return (
    <div className="manage-leave-container">
      <h3 className="title">{t("leaves.leaves")}</h3>
      <div className="create-search-field">
        {isAdmin && (
          <button onClick={() => openModal()} className="search-field-button">
            {t("button.create")}
          </button>
        )}
        <div className="all-comp-search-wrap">
          <input
            type="text"
            placeholder={t("button.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-field"
          />
          <CiSearch className="all-comp-search-icon" />
        </div>
      </div>
      <div className="display-information">
        <div className="leaves-information">
        {filteredLeaves.map((leave) => (
          <ul className="leaves-content" key={leave.id}>
            <li className="leaves-bar"><strong>{t("leaves.name")}:</strong>{leave.employeeName}</li>
            <li className="leaves-bar"><strong>{t("leaves.date")}:</strong>{leave.dateOfApplication}</li>
            <li className="leaves-bar"><strong>{t("leaves.type")}:</strong>{leave.applicationType}</li>
            <li className="leaves-bar"><strong>{t("leaves.duration")}:</strong>{leave.duration}</li>
            <li
              className={`leaves-bar ${
                leave.status === "approved"
                  ? "approved-item-separate"
                  : leave.status === "pending"
                  ? "pending-item-separate"
                  : leave.status === "rejected"
                  ? "rejected-item-separate"
                  : null
              }`}
            >
              <strong>{t("leaves.status")}:</strong>{leave.status}
            </li>
            <hr />
            <li className="align-center"><strong>{t("button.action")}</strong></li>
            <br />
            <li>
              <Button
                onView={() => handleView(leave)}
                onEdit={() => openModal(leave)}
                onDelete={() => handleDelete(leave.id)}
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
        <h2 className="modal-title">
          {!formData.id
            ? t("leaves.create")
            : t("leaves.edit")}
        </h2>
        <div className="form-container">
          <label className="form-label">{t("leaves.name")}</label>
          <input
            placeholder={t("leaves.name")}
            className="form-input"
            type="text"
            value={formData.employeeName}
            onChange={(e) =>
              setFormData({ ...formData, employeeName: e.target.value })
            }
          />
          <label className="form-label">{t("leaves.date")}</label>
          <input
            className="form-input"
            type="date"
            value={formData.dateOfApplication}
            onChange={(e) =>
              setFormData({ ...formData, dateOfApplication: e.target.value })
            }
          />
          <label className="form-label">{t("leaves.type")}</label>
          <input
            placeholder={t("leaves.type")}
            className="form-input"
            type="text"
            value={formData.applicationType}
            onChange={(e) =>
              setFormData({ ...formData, applicationType: e.target.value })
            }
          />
          <label className="form-label">{t("leaves.duration")}</label>
          <input
            placeholder={t("leaves.duration")}
            className="form-input"
            type="text"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
          />
          <label className="form-label">{t("leaves.status")}</label>
          <select
            className="form-input form-select"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="pending">{t("leaves.pending")}</option>
            <option value="approved">{t("leaves.approved")}</option>
            <option value="rejected">{t("leaves.rejected")}</option>
          </select>
          <button className="form-button" onClick={handleSave}>
            {t("button.save")}
          </button>
        </div>
      </Modal>
      {closediv ? (
        <div className="comp-div-for-display-information-for-all">
          <br />
          <strong>{t("leaves.information")}</strong>
          <br />
          <hr />
          <br />
          <p>
            <strong>{t("leaves.name")}:</strong>
            {leaveInformation.employeeName}
          </p>
          <p>
            <strong>{t("leaves.date")}:</strong>
            {leaveInformation.dateOfApplication}
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

export default ManageLeave;
