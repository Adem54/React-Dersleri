import {message} from "antd";

export const showError = (errorMessage:string) => {
    message.error(errorMessage);
  };