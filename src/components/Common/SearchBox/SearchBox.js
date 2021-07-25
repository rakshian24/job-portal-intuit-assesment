import React from 'react';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import './SearchBox.style.css';

const SearchBox = ({
  label,
  placeholder,
  inputBoxFlexSize,
  btnText,
  name,
  handleSubmit,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="search-box-wrapper">
      <div className="search-box" style={{ flex: inputBoxFlexSize }}>
        <FormInput
          type="text"
          label={label}
          name={name}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>
      <div className="search-btn-container">
        <button
          className="search-btn"
          onClick={(e) => handleSubmit(e, searchQuery)}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
