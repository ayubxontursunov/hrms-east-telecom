import "./Dropdown.css";
import { useTranslation } from "react-i18next";
import Key from "../../auth/Key";
import { useState } from "react";
function Dropdown() {
  const {t} = useTranslation("global");
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
        <h4 className="setting-description-text">{t("profile.status.current-status")}</h4>
        <select
          value={selectedOption1}
          onChange={handleSelectedOption1}
          className="dropdown-select"
        >
          <option value="" disabled>
          {t("profile.status.select-mood")}
          </option>
          <option value="🙂 Good">{t("profile.status.good")}</option>
          <option value="😐 Neutral">{t("profile.status.neutral")}</option>
          <option value="😪 Stressed">{t("profile.status.neutral")}</option>
          <option value="😡 Angry">{t("profile.status.angry")}</option>
        </select>
      </div>
      <div className="wrapper-dropdown">
        <h4 className="setting-description-text">{t("profile.status.current-availability")}</h4>
        <select
          value={selectedOption2}
          onChange={handleSelectedOption2}
          className="dropdown-select"
        >
          <option value="" disabled>
          {t("profile.status.select-availability")}
          </option>
          <option value="🟢 Available">{t("profile.status.available")}</option>
          <option value="📅 In a Meeting">{t("profile.status.meeting")}</option>
          <option value="🏝️ Out of Office">{t("profile.status.office")}</option>
          <option value="🚫 Do Not Disturb">{t("profile.status.disturb")}</option>
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
