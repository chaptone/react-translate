import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const LanguageSelector = () => {
  const { onLanguageChange } = useContext(LanguageContext);

  return (
    <div>
      <i
        style={{ fontSize: "20px" }}
        onClick={() => onLanguageChange("german")}
      >
        🇩🇪
      </i>
      <i
        style={{ fontSize: "20px" }}
        onClick={() => onLanguageChange("english")}
      >
        🇺🇸
      </i>
      <i style={{ fontSize: "20px" }} onClick={() => onLanguageChange("thai")}>
        🇹🇭
      </i>
    </div>
  );
};

export default LanguageSelector;
