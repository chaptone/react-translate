import React, { useContext } from "react";
import { Input, Form } from "antd";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const { language } = useContext(LanguageContext);
  const getLanguage = language => {
    switch (language) {
      case "german":
        return "der Name";
      case "thai":
        return "ชื่อ";
      default:
        return "Name";
    }
  };
  return (
    <Form.Item label={getLanguage(language)} name="name">
      <Input />
    </Form.Item>
  );
};

export default Field;
