import React from 'react';
import './Tag.style.css';
import { BsX } from 'react-icons/bs';

const Tag = ({ tag, handleRemoveTag }) => {
  const { uuid, text } = tag;
  return (
    <div className="tag">
      <span>{text}</span>
      <BsX
        className="close-icon"
        onClick={(e) => handleRemoveTag(e, uuid)}
      ></BsX>
    </div>
  );
};

export default Tag;
