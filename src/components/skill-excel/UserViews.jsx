import { useState } from 'react';
import './UserViews.css';
import * as XLSX from 'xlsx';
import Key from '../../auth/Key';

const UserViews = () => {
  const mockData = [
    {
      skillCategory: "Languages",
      skillName: "English",
      proficiencyLevel: "Fluent",
      certifications: "TOEFL",
      certifiedDate: "2024"
    },
    {
      skillCategory: "Languages",
      skillName: "Spanish",
      proficiencyLevel: "Intermediate",
      certifications: "DELE B2",
      certifiedDate: "2023"
    },
    {
      skillCategory: "Software",
      skillName: "Microsoft Word",
      proficiencyLevel: "Advanced",
      certifications: "Microsoft Office Specialist",
      certifiedDate: "2024"
    },
    {
      skillCategory: "Software",
      skillName: "Microsoft Excel",
      proficiencyLevel: "Expert",
      certifications: "Microsoft Office Expert",
      certifiedDate: "2024"
    },
    {
      skillCategory: "Programming",
      skillName: "JavaScript",
      proficiencyLevel: "Expert",
      certifications: "Certified JavaScript Developer",
      certifiedDate: "2024"
    },
    {
      skillCategory: "Programming",
      skillName: "React",
      proficiencyLevel: "Advanced",
      certifications: "React Developer Certification",
      certifiedDate: "2024"
    },
    {
      skillCategory: "Soft Skills",
      skillName: "Project Management",
      proficiencyLevel: "Experienced",
      certifications: "PMP",
      certifiedDate: "2024"
    }
  ];

  const [data, setData] = useState(mockData); // Initialize with mockData

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);

      console.log('Parsed JSON:', json); // Debugging line
      setData(json);
    };
    reader.readAsBinaryString(file);
  };

  const renderTable = (data) => {
    return (
      <table className="skills-table-vw">
        <thead>
          <tr>
            <th>Skill Category</th>
            <th>Skill Name</th>
            <th>Proficiency Level</th>
            <th>Certifications</th>
            <th>Certified Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item['Skill Category'] || item.skillCategory}</td>
              <td>{item['Skill Name'] || item.skillName}</td>
              <td>{item['Proficiency Level'] || item.proficiencyLevel}</td>
              <td>{item['Certifications'] || item.certifications}</td>
              <td>{item['Certified Date'] || item.certifiedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="profile-vw">
      <div className="profile-header-vw">
        <div className='userinfo_prof-vw'>
          {renderTable(data)}
          {Key((state) => state.isAdmin) ? (
            <div className="upload-button-vw">
              <label htmlFor="file-upload" className="upload-button-view-vw">
                Upload File
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                className="upload-input-vw"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserViews;
