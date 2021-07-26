import React from 'react';
import './FormInputErrorMessage.style.css';

const FormInputErrorMessage = ({ errorMsg }) => {
  return <div className="form-error">{errorMsg}</div>;
};

export default FormInputErrorMessage;
