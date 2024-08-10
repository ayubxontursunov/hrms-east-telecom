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
      applicationType: "Sick Leave",
      duration: "3 days",
      status: "pending",
    },
    {
      id: 2,
      employeeName: "Simon Steven",
      dateOfApplication: "2024-07-20",
      applicationType: "Annual Leave",
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
      <h3 className="title">{t("sidebar.leaves")}</h3>
      <div className="create-search-field">
        {isAdmin && (
          <button onClick={() => openModal()} className="search-field-button">
            {t("button.create")}
          </button>
        )}
        <div className="all-comp-search-wrap">
          <input
            type="text"
            placeholder={t("search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-field"
          />
          <CiSearch className="all-comp-search-icon" />
        </div>
      </div>
      <div className="display-information">
        <ul className="leaves-grid">
          <li className="separate-bar">Employee Name</li>
          <li className="separate-bar">Date of Application</li>
          <li className="separate-bar">Application Type</li>
          <li className="separate-bar">Duration</li>
          <li className="separate-bar">Status</li>
          <li className="locate-center">Action</li>
        </ul>
        {filteredLeaves.map((leave) => (
          <ul className="leaves-content" key={leave.id}>
            <li className="separate-bar">{leave.employeeName}</li>
            <li className="separate-bar">{leave.dateOfApplication}</li>
            <li className="separate-bar">{leave.applicationType}</li>
            <li className="separate-bar">{leave.duration}</li>
            <li
              className={`separate-bar ${
                leave.status === "approved"
                  ? "approved-item-separate"
                  : leave.status === "pending"
                  ? "pending-item-separate"
                  : leave.status === "rejected"
                  ? "rejected-item-separate"
                  : null
              }`}
            >
              {leave.status}
            </li>
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-title">
          {!formData.id
            ? "Create a New Leave Application"
            : "Edit Leave Application"}
        </h2>
        <div className="form-container">
          <label className="form-label">Employee Name</label>
          <input
            placeholder="Employee Name"
            className="form-input"
            type="text"
            value={formData.employeeName}
            onChange={(e) =>
              setFormData({ ...formData, employeeName: e.target.value })
            }
          />
          <label className="form-label">Date of Application</label>
          <input
            className="form-input"
            type="date"
            value={formData.dateOfApplication}
            onChange={(e) =>
              setFormData({ ...formData, dateOfApplication: e.target.value })
            }
          />
          <label className="form-label">Application Type</label>
          <input
            placeholder="Application Type"
            className="form-input"
            type="text"
            value={formData.applicationType}
            onChange={(e) =>
              setFormData({ ...formData, applicationType: e.target.value })
            }
          />
          <label className="form-label">Duration</label>
          <input
            placeholder="Duration"
            className="form-input"
            type="text"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
          />
          <label className="form-label">Status</label>
          <select
            className="form-input form-select"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <button className="form-button" onClick={handleSave}>
            {t("button.save")}
          </button>
        </div>
      </Modal>
      {closediv ? (
        <div className="comp-div-for-display-information-for-all">
          <br />
          <strong>Leave Information</strong>
          <br />
          <hr />
          <br />
          <p>
            <strong>Employee:</strong>
            {leaveInformation.employeeName}
          </p>
          <p>
            <strong>Date of Application:</strong>
            {leaveInformation.dateOfApplication}
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

export default ManageLeave;
