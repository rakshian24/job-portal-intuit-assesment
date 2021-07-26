import React from 'react';
import FormInput from '../FormInput/FormInput';
import './SearchBox.style.css';

const SearchBox = ({
  label,
  placeholder,
  inputBoxFlexSize,
  btnText,
  name,
  handleSubmit,
  formError,
  validateForm,
  githubUser,
  setGithubUser,
  setShowProjectsSection,
  value,
}) => {
  const handleInputChange = (e) => {
    setShowProjectsSection(false);
    setGithubUser(e.target.value);
    const validationErrorsLength = Object.keys(formError).length > 0;
    if (validationErrorsLength) {
      validateForm();
    }
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
          formError={formError}
          value={value}
        />
      </div>
      <div
        className={`search-btn-container ${formError[name] ? 'formError' : ''}`}
      >
        <button
          className="search-btn"
          onClick={(e) => handleSubmit(e, githubUser)}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
