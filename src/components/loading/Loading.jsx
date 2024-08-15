import "./Loading.css";
import logoimg from "../../image/logo_1.png";
import { useState, useEffect } from "react";

function Loading() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 60); // 3000ms / 100 steps = 30ms per increment

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-container-element-wrap">
        <img className="loading-logo-img" src={logoimg} alt="logo img" />
        <h3 className="logo-title-loading loading-title">EAST TELECOM</h3>
      </div>
      <h3 className="logo-title-loading">
        Loading... <strong>{percentage}%</strong>
      </h3>
    </div>
  );
}

export default Loading;
