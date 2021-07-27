import React from 'react';
import './Tag.style.css';
import { BsX } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Tag = ({ tag, handleRemoveTag }) => {
  const { darkTheme } = useSelector((state) => state.darkTheme);
  const { uuid, text } = tag;
  return (
    <div className={`tag ${darkTheme ? 'dt-tag' : ''}`}>
      <span>{text}</span>
      <BsX
        className="close-icon"
        onClick={(e) => handleRemoveTag(e, uuid)}
      ></BsX>
    </div>
  );
};

export default Tag;
