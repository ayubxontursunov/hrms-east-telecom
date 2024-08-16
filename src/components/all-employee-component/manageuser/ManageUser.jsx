import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ManageUser.css";
import Button from "../../../elements/buttonaction/Button";
import Key from "../../../auth/Key";
import Modal from "../addnewemployee/Modal";
import Form1 from "../addnewemployee/personalinformation/PersonalInformation";
import Form2 from "../addnewemployee/work/Work";
import Form3 from "../addnewemployee/contact/Contact";
import Form4 from "../addnewemployee/documents/Documents";
import Form5 from "../addnewemployee/report/Report";
import { CiSearch } from "react-icons/ci";
import lilyImage from "../../../image/viewinfo2.jpg";
import lisaImage from "../../../image/lisaImg.jpg";
import johnImage from "../../../image/viewinfo1.jpg";
import UserViews from "../../skill-excel/UserViews";

function ManageUser() {
  const { t } = useTranslation("global");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(1);
  const [allData] = useState([
    {
      id: 1,
      personalInfo: {
        firstName: "Lily",
        lastName: "Evilyn",
        dateOfBirth: "1990-01-01",
        maritalStatus: "Single",
        img: lilyImage,
      },
      workInfo: {
        employmentType: "Full-time",
        duty: "Software Development",
        department: "NBD",
        team: "SW Development",
        jobTitle: "Software Engineer",
        wages: "1000 USD",
        joinedDate: "2015-06-15",
        education: "Bachelor's Degree in Computer Science",
      },
      contactInfo: {
        region: "Tashkent",
        phoneNumber: "+998 00 000 00 00",
        email: "abdulla@example.com",
      },
      documents: {
        document1: "resume.pdf",
        document2: "coverletter.pdf",
      },
      reportInfo: {
        supervisor: "Doniyor",
        firstApprover: "Jane Smith",
        secondApprover: "Robert Brown",
      },
    },
    {
      id: 2,
      personalInfo: {
        firstName: "Lisa",
        lastName: "Evilyn",
        dateOfBirth: "1990-01-01",
        maritalStatus: "Single",
        img: lisaImage,
      },
      workInfo: {
        employmentType: "Full-time",
        duty: "Admin Manager",
        department: "HRM",
        team: "HR",
        jobTitle: "Software Engineer",
        wages: "1000 USD",
        joinedDate: "2015-06-15",
        education: "Bachelor's Degree in Computer Science",
      },
      contactInfo: {
        region: "Tashkent",
        phoneNumber: "+998 00 000 00 00",
        email: "abdulla@example.com",
      },
      documents: {
        document1: "resume.pdf",
        document2: "coverletter.pdf",
      },
      reportInfo: {
        supervisor: "Jane William",
        firstApprover: "Jane Smith",
        secondApprover: "Robert Brown",
      },
    },
    {
      id: 3,
      personalInfo: {
        firstName: "John",
        lastName: "Swith",
        dateOfBirth: "1990-01-01",
        maritalStatus: "Single",
        img: johnImage,
      },
      workInfo: {
        employmentType: "Full-time",
        duty: "Software Development",
        department: "NBD",
        team: "SW Development",
        jobTitle: "Software Engineer",
        wages: "1000 USD",
        joinedDate: "2015-06-15",
        education: "Bachelor's Degree in Computer Science",
      },
      contactInfo: {
        region: "Tashkent",
        phoneNumber: "+998 00 000 00 00",
        email: "abdulla@example.com",
      },
      documents: {
        document1: "resume.pdf",
        document2: "coverletter.pdf",
      },
      reportInfo: {
        supervisor: "Doniyor",
        firstApprover: "Jane Smith",
        secondApprover: "Robert Brown",
      },
    }
  ]);

  const [employees, setEmployees] = useState(allData);
  const [formData, setFormData] = useState({
    id: null,
    personalInfo: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      maritalStatus: "",
    },
    workInfo: {
      employmentType: "",
      duty: "",
      department: "",
      team: "",
      jobTitle: "",
      wages: "",
      joinedDate: "",
      education: "",
    },
    contactInfo: { region: "", phoneNumber: "", email: "" },
    documents: { document1: "", document2: "" },
    reportInfo: { supervisor: "", firstApprover: "", secondApprover: "" },
  });
  const [viewInformation, setViewInformation] = useState(false);
  const [viewInformationData, setViewInformationData] = useState(null);

  const openModal = (employee = null) => {
    if (employee) {
      // Editing an existing employee
      setFormData({
        id: employee.id,
        personalInfo: employee.personalInfo,
        workInfo: employee.workInfo,
        contactInfo: employee.contactInfo,
        documents: employee.documents,
        reportInfo: employee.reportInfo,
      });
    } else {
      // Creating a new employee
      setFormData({
        id: null,
        personalInfo: {
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          maritalStatus: "",
        },
        workInfo: {
          employmentType: "",
          duty: "",
          department: "",
          team: "",
          jobTitle: "",
          wages: "",
          joinedDate: "",
          education: "",
        },
        contactInfo: { region: "", phoneNumber: "", email: "" },
        documents: { document1: "", document2: "" },
        reportInfo: { supervisor: "", firstApprover: "", secondApprover: "" },
      });
    }
    setCurrentForm(1);
    setIsModalOpen(true);
  };

  const closeModal = (newEmployeeData) => {
    if (newEmployeeData) {
      if (formData.id) {
        // Edit existing employee
        setEmployees((prev) =>
          prev.map((employee) =>
            employee.id === formData.id
              ? {
                  ...employee,
                  personalInfo: formData.personalInfo,
                  workInfo: formData.workInfo,
                  contactInfo: formData.contactInfo,
                  documents: formData.documents,
                  reportInfo: formData.reportInfo,
                }
              : employee
          )
        );
      } else {
        // Add new employee
        setEmployees((prev) => [
          ...prev,
          {
            id: prev.length + 1, // Generate new ID
            personalInfo: formData.personalInfo,
            workInfo: formData.workInfo,
            contactInfo: formData.contactInfo,
            documents: formData.documents,
            reportInfo: formData.reportInfo,
          },
        ]);
      }
    }
    setIsModalOpen(false);
    setCurrentForm(1);
  };

  const nextForm = () => {
    setCurrentForm((prev) => prev + 1);
  };

  const previousForm = () => {
    setCurrentForm((prev) => prev - 1);
  };

  const filteredData = employees.filter((employee) =>
    employee.personalInfo.firstName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const nameA = a.personalInfo.firstName.toLowerCase();
    const nameB = b.personalInfo.firstName.toLowerCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  const handleViewInformation = (employee) => {
    setViewInformation(true);
    setViewInformationData(employee);
  };

  const handleBack = () => {
    setViewInformation(false);
    setViewInformationData(null);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="manage-user-container">
      <h3 className="title">
        {t("all-employees.all-employees")}
      </h3>
      <div className="create-search-field">
        {Key((state) => state.isAdmin) ? (
          <button onClick={() => openModal()} className="search-field-button">
            {t("button.create")}
          </button>
        ) : null}
        <div className="all-comp-search-wrap">
          <input
            className="search-field"
            type="text"
            placeholder={t("button.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch className="all-comp-search-icon" />
        </div>
      </div>
      <div className="display-information">
        <ul className="information-title">
          <li className="separate-bar">{t("all-employees.employee-name")}</li>
          <li className="separate-bar">{t("all-employees.department")}</li>
          <li className="separate-bar">{t("all-employees.division")}</li>
          <li className="locate-center">{t("button.action")}</li>
        </ul>
        {sortedData.map((employee) => (
          <ul className="employee-content" key={employee.id}>
            <li className="separate-bar">{employee.personalInfo.firstName}</li>
            <li className="separate-bar">{employee.workInfo.department}</li>
            <li className="separate-bar">{employee.workInfo.team}</li>
            <li>
              <Button
                onView={() => handleViewInformation(employee)}
                onEdit={() => openModal(employee)}
                onDelete={() => handleDelete(employee.id)}
              />
            </li>
          </ul>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal()}
        className="modal-content"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={false}
      >
        <h2 className="modal-title">
          {!formData.id ? t("all-employees.add-new-employee") : t("all-employees.edit-employee-information")}
        </h2>
        {currentForm === 1 && (
          <Form1
            formData={formData}
            setFormData={setFormData}
            next={nextForm}
          />
        )}
        {currentForm === 2 && (
          <Form2
            formData={formData}
            setFormData={setFormData}
            next={nextForm}
            previous={previousForm}
          />
        )}
        {currentForm === 3 && (
          <Form3
            formData={formData}
            setFormData={setFormData}
            next={nextForm}
            previous={previousForm}
          />
        )}
        {currentForm === 4 && (
          <Form4
            formData={formData}
            setFormData={setFormData}
            next={nextForm}
            previous={previousForm}
          />
        )}
        {currentForm === 5 && (
          <Form5
            formData={formData}
            setFormData={setFormData}
            previous={previousForm}
            close={closeModal}
          />
        )}
      </Modal>

      {viewInformation && viewInformationData && (
        <div className="display-view-information display-view-information-open">
          <button
            className="view-information-div-close-button"
            onClick={handleBack}
          >
            {t("button.back")}
          </button>
          <br />
          <h2>{t("all-employees.employee-information")}</h2>
          <hr className="horizontal-line"/>
          <div className="viewinformation-wrap">
            <div className="viewinformation-left">
              <img
                className="viewinformation-image"
                src={viewInformationData.personalInfo.img}
                alt=""
              />
              <p className="user-view-item-1">
                <strong>{t("profile.personal.first-name")}:</strong>{" "}
                {viewInformationData.personalInfo.firstName}
              </p>
              <p className="user-view-item-2">
                <strong>{t("profile.personal.last-name")}:</strong>{" "}
                {viewInformationData.personalInfo.lastName}
              </p>
              <p className="user-view-item-3">
                <strong>{t("profile.personal.job-type")}:</strong>{" "}
                {viewInformationData.workInfo.employmentType}
              </p>
              <p className="user-view-item-4">
                <strong>{t("profile.personal.duty")}:</strong> {viewInformationData.workInfo.duty}
              </p>
              <p className="user-view-item-5">
                <strong>{t("profile.personal.department")}:</strong>{" "}
                {viewInformationData.workInfo.department}
              </p>
              <p className="user-view-item-6">
                <strong>{t("profile.personal.division")}:</strong> {viewInformationData.workInfo.team}
              </p>
              <p className="user-view-item-7">
                <strong>{t("profile.personal.job-title")}:</strong>{" "}
                {viewInformationData.workInfo.jobTitle}
              </p>
              <p className="user-view-item-8">
                <strong>{t("profile.personal.joined-date")}:</strong>{" "}
                {viewInformationData.workInfo.joinedDate}
              </p>
              <p className="user-view-item-9">
                <strong>{t("profile.personal.phone-number")}:</strong>{" "}
                {viewInformationData.contactInfo.phoneNumber}
              </p>
              <p className="user-view-item-10">
                <strong>{t("profile.personal.supervisor")}:</strong>{" "}
                {viewInformationData.reportInfo.supervisor}
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <h2>{t("profile.personal.performance-skills")}</h2>
            <hr className="horizontal-line"/>
            <div className="viewinformation-right">
              <UserViews/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageUser;
