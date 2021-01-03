import React from "react";
import { Form, Button as AntButton } from "antd";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {
  const getLanguage = language => {
    switch (language) {
      case "german":
        return "Einreichen";
      case "thai":
        return "ส่ง";
      default:
        return "Submit";
    }
  };
  return (
    <Form.Item>
      <ColorContext.Consumer>
        {color => (
          <AntButton
            type="primary"
            danger={color === "red" ? true : false}
            htmlType="submit"
          >
            <LanguageContext.Consumer>
              {value => getLanguage(value)}
            </LanguageContext.Consumer>
          </AntButton>
        )}
      </ColorContext.Consumer>
    </Form.Item>
  );
};

export default Button;
