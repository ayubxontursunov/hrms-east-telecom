import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ManageTraining.css";
import Button from '../../elements/buttonaction/Button';
import Modal from "../all-employee-component/addnewemployee/Modal";
import Key from "../../auth/Key";
import { CiSearch } from "react-icons/ci";
function ManageTraining() {
  const { t } = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, title: "", description: "", department: "", startDate: "" });
  const [trainings, setTrainings] = useState([
    { id: 1, title: "Leadership Training", description: "Leadership skills workshop", department: "HR", startDate: "2024-09-01" },
    { id: 2, title: "Technical Skills Training", description: "Advanced programming techniques", department: "IT", startDate: "2024-11-15" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setTrainings(trainings.filter((training) => training.id !== id));
  };

  const openModal = (training = null) => {
    if (training) {
      setFormData(training);
    } else {
      setFormData({ id: null, title: "", description: "", department: "", startDate: "" });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (formData.id) {
      setTrainings((prev) =>
        prev.map((training) =>
          training.id === formData.id ? formData : training
        )
      );
    } else {
      setTrainings((prev) => [
        ...prev,
        { ...formData, id: prev.length + 1 },
      ]);
    }
    closeModal();
  };

  const filteredTrainings = trainings.filter(
    (training) =>
      training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.description.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="manage-training-container">
      <h3 className="title">{t("sidebar.training")}</h3>
      <div className="create-search-field">
        {Key((state)=>state.isAdmin)?      <button onClick={() => openModal()} className="search-field-button">
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
        <ul className="training-grid">
          <li className="separate-bar">Title</li>
          <li className="separate-bar">Description</li>
          <li className="locate-center">Action</li>
        </ul>
        {filteredTrainings.map((training) => (
          <ul className="training-content" key={training.id}>
            <li className="separate-bar">{training.title}</li>
            <li className="separate-bar">{training.description}</li>
            <li>
              <Button
                onView={()=>handleView(training)}
                onEdit={() => openModal(training)}
                onDelete={() => handleDelete(training.id)}
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
        <h2 className="modal-title">{!formData.id ? "Create a New Training" : "Edit Training"}</h2>
        <div className="form-container">
          <label className="form-label">Title</label>
          <input
            placeholder="Title"
            className="form-input"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <label className="form-label">Description</label>
          <input
            placeholder="Description"
            className="form-input"
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <label className="form-label">Department</label>
          <input
            placeholder="Department"
            className="form-input"
            type="text"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          />
          <label className="form-label">Start Date</label>
          <input
            className="form-input"
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          />
          <button className="form-button" onClick={handleSave}>Save</button>
        </div>
      </Modal>
      {closediv ? (
        <div className="comp-div-for-display-information-for-all">
          <br />
          <strong>Training Information</strong>
          <br />
          <hr />
          <br />
          <p>
            <strong>Title:</strong>
            {Information.title}
          </p>
          <p>
            <strong>Description:</strong>
            {Information.description}
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

export default ManageTraining;
