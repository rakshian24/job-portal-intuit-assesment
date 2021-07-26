import React from 'react';
import FormInputErrorMessage from '../FormInputErrorMessage/FormInputErrorMessage';
import './Select.style.css';

const Select = ({ label, formError, name, options, handleDropdownChange }) => {
  return (
    <div className="custom-select">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={handleDropdownChange}>
        <option value="Please select your experience">
          Select your experience
        </option>
        {options.map((op, index) => (
          <option value={op.value} key={index}>
            {op.value}
          </option>
        ))}
      </select>
      {formError && formError[name] ? (
        <FormInputErrorMessage errorMsg={formError[name]} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Select;
