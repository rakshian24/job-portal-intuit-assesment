import React from 'react';
import FormInputErrorMessage from '../FormInputErrorMessage/FormInputErrorMessage';
import './FormInput.style.css';

const FormInput = ({ type, formError, label, name, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input"
      />
      {formError && formError[name] ? (
        <FormInputErrorMessage errorMsg={formError[name]} />
      ) : (
        ''
      )}
    </div>
  );
};

export default FormInput;
