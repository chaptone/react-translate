import React, { useState } from "react";
import { Typography } from "antd";
import UserCreate from "./userCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

const App = () => {
  return (
    <Typography.Text>
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </Typography.Text>
  );
};

export default App;
