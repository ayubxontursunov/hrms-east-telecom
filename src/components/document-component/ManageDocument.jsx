import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ManageDocument.css";
import Button from "../../elements/buttondelete/ButtonDelete";
import Modal from "../all-employee-component/addnewemployee/Modal";
import Key from "../../auth/Key";
import { CiSearch } from "react-icons/ci";
function ManageDocuments() {
  const { t } = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, title: "", description: "", department: "", startDate: "" });
  const [documents, setDocuments] = useState([
    { id: 1, title: "Project Proposal", description: "Proposal for the new project", department: "R&D", startDate: "2024-08-15" },
    { id: 2, title: "Budget Report", description: "Quarterly budget report", department: "Finance", startDate: "2024-09-30" },
    { id: 3, title: "Philosopher's Stone", description: "World of adventures", department: "Finance", startDate: "2024-09-30" },
    { id: 4, title: "Amazon", description: "Wild nature", department: "Finance", startDate: "2024-09-30" },
    { id: 5, title: "Independance", description: "Things included in the independece of Cultures", department: "Finance", startDate: "2024-09-30" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setDocuments(documents.filter((document) => document.id !== id));
  };

  const openModal = () => {
    setFormData({ id: null, title: "", description: "", department: "", startDate: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (!formData.id) {
      setDocuments((prev) => [
        ...prev,
        { ...formData, id: prev.length + 1 },
      ]);
    }
    closeModal();
  };

  const filteredDocuments = documents.filter(
    (document) =>
      document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      document.description.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="manage-documents-container">
      <h3 className="title">{t("documents.documents")}</h3>
      <div className="create-search-field">
    
        {Key((state)=>state.isAdmin)?<button onClick={openModal} className="search-field-button">
          {t("button.create")}
        </button>:null}
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
        <div className="document-content-wrap">
        {filteredDocuments.map((document) => (
          <ul className="document-content" key={document.id}>
            <li className="document-bar"><strong>{t("documents.title")}:</strong>{document.title}</li>
            <li className="document-bar"><strong>{t("documents.description")}:</strong>{document.description}</li>
            <hr className="horizontal-line-card"/>
            <li className="locate-center">{t("button.action")}</li>
            <li>
              <Button
              onView={()=>handleView(document)}
                onDelete={() => handleDelete(document.id)}
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
        <h2 className="modal-title">{t("documents.create")}</h2>
        <div className="form-container">
          <label className="form-label">{t("documents.title")}</label>
          <input
            placeholder={t("documents.title")}
            className="form-input"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <label className="form-label">{t("documents.description")}</label>
          <input
            placeholder={t("documents.description")}
            className="form-input"
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <label className="form-label">{t("documents.upload")}</label>
          <input
            className="form-input"
            type="file"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          />
          <button className="form-button" onClick={handleSave}>{t("button.save")}</button>
        </div>
      </Modal>
      {closediv ? (
        <div className="comp-div-for-display-information-for-all">
          <br />
          <strong>{t("documents.information")}</strong>
          <br />
          <hr />
          <br />
          <p>
            <strong>{t("documents.title")}:</strong>
            {Information.title}
          </p>
          <p>
            <strong>{t("documents.description")}:</strong>
            {Information.description}
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

export default ManageDocuments;
