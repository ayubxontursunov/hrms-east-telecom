import React, { useState } from "react";
import './Dropdown.css';

const AdvancedDropdown = ({ options, defaultText, description }) => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className="dropdown-wrap">
            <div className="setting-description">
                <div className="setting-description-text">
                    <h10>{description}</h10>
                </div>
            </div>
            <div className="wrapper-dropdown">
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="dropdown-select"
                >
                    <option value="" disabled>{defaultText}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="dropdown-container">
            <AdvancedDropdown
                options={["🙂 Good", "😐 Neutral", "😪 Stressed", "😡 Angry"]}
                defaultText="Select your current mood"
                description="Emotional State"
            />
            <AdvancedDropdown
                options={["🟢 Available", "📅 In a Meeting", "🏝️ Out of Office", "🚫 Do Not Disturb"]}
                defaultText="Select your availability"
                description="Current Status"
            />
        </div>

    );
};

export default App;
