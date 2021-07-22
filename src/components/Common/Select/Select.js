import React from 'react';
import './Select.style.css';

const Select = ({ label, name, options, handleDropdownChange }) => {
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
    </div>
  );
};

export default Select;
