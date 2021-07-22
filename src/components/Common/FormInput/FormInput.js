import React from 'react';
import './FormInput.style.css';

const FormInput = ({ type, id, label, name, onChange, placeholder }) => {
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
    </div>
  );
};

export default FormInput;
