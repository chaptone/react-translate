import React, { useState } from "react";
import { Typography } from "antd";
import UserCreate from "./userCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const App = () => {
  const [language, setLanguage] = useState("english");
  return (
    <Typography.Text>
      Select Language:
      <i style={{ fontSize: "20px" }} onClick={() => setLanguage("german")}>
        🇩🇪
      </i>
      <i style={{ fontSize: "20px" }} onClick={() => setLanguage("english")}>
        🇺🇸
      </i>
      <i style={{ fontSize: "20px" }} onClick={() => setLanguage("thai")}>
        🇹🇭
      </i>
      {language}
      <ColorContext.Provider value="red">
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </Typography.Text>
  );
};

export default App;
