import "./Dropdown.css";

import Key from "../../auth/Key";
import { useState } from "react";
function Dropdown() {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const setMood = Key((state) => state.setMood);
  const handleSelectedOption1 = (e) => {
    setSelectedOption1(e.target.value);
    setMood(e.target.value);
  };
  const setAvailability = Key((state) => state.setAvailability);
  const handleSelectedOption2 = (e) => {
    setSelectedOption2(e.target.value);
    setAvailability(e.target.value);
  };
  return (
    <div className="dropdown-wrap">
      <div className="wrapper-dropdown">
        <h4 className="setting-description-text">Current Status</h4>
        <select
          value={selectedOption1}
          onChange={handleSelectedOption1}
          className="dropdown-select"
        >
          <option value="" disabled>
            Select your mood
          </option>
          <option value="🙂 Good">🙂 Good</option>
          <option value="😐 Neutral">😐 Neutral</option>
          <option value="😪 Stressed">😪 Stressed</option>
          <option value="😡 Angry">😡 Angry</option>
        </select>
      </div>
      <div className="wrapper-dropdown">
        <h4 className="setting-description-text">Current Availability</h4>
        <select
          value={selectedOption2}
          onChange={handleSelectedOption2}
          className="dropdown-select"
        >
          <option value="" disabled>
            Select your availablity
          </option>
          <option value="🟢 Available">🟢 Available</option>
          <option value="📅 In a Meeting">📅 In a Meeting</option>
          <option value="🏝️ Out of Office">🏝️ Out of Office</option>
          <option value="🚫 Do Not Disturb">🚫 Do Not Disturb</option>
        </select>
      </div>
    </div>
  );
}
export default Dropdown;

// function Dropdown(){
//     return (
//         <div className="dropdown-container">
//             <AdvancedDropdown
//                 options={["🙂 Good", "😐 Neutral", "😪 Stressed", "😡 Angry"]}
//                 defaultText="Select your current mood"
//                 description="Emotional State"
//             />
//             <AdvancedDropdown
//                 options={["🟢 Available", "📅 In a Meeting", "🏝️ Out of Office", "🚫 Do Not Disturb"]}
//                 defaultText="Select your availability"
//                 description="Current Status"
//             />
//         </div>
//     );
// };
