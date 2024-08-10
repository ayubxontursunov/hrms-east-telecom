import { useState } from 'react';
import './UserViews.css';
import * as XLSX from 'xlsx';
import EmployeeSkillsBarChart from '../components/employeeinformation/EmployeeSkillsBarChart';

const UserViews = () => {
  const [data, setData] = useState(null);

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
      setData(json);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="profile-vw">
      <div className="profile-header-vw">
        <div className='userinfo_prof-vw'>
        <div className="chart-container-vw">
          <EmployeeSkillsBarChart data={data || undefined} />
        </div>
          <div className="upload-button-vw">
            <label htmlFor="file-upload" className="upload-button-view-vw">
              Upload Excel File
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              className="upload-input-vw"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserViews;
