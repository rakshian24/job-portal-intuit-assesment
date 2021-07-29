import React from 'react';
import { useSelector } from 'react-redux';
import FormInputErrorMessage from '../FormInputErrorMessage/FormInputErrorMessage';
import './FormInput.style.css';

const FormInput = ({
  type,
  formError,
  label,
  name,
  value,
  onChange,
  placeholder,
  submitOnEnter
}) => {
  const { darkTheme } = useSelector((state) => state.darkTheme);
  return (
    <div className={`form-group ${darkTheme ? 'dark-theme-form-group' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-input ${darkTheme ? 'dark-theme-input' : ''}`}
        value={value}
        onKeyPress={(e) => e.key === 'Enter' && !submitOnEnter && e.preventDefault()}
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
