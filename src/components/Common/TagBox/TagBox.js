import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Tag from '../Tag/Tag';
import './TagBox.style.css';
import { v4 as uuid } from 'uuid';

const TagBox = ({ label, tags, setTags }) => {
  const [isTagInputFocussed, setIsTagInputFocussed] = useState(false);
  const tagInput = useRef();

  const createTagOnChangeEvent = (e) => {
    const text = e.target.value;
    let newTag;
    if (text[text.length - 1] === ',') {
      newTag = text.slice(0, text.length - 1);
      tagInput.current.value = '';
      setTags([...tags, { uuid: uuid(), text: newTag }]);
    }
  };

  const createTagOnEnter = (e) => {
    const text = e.target.value;
    if (e.key === 'Enter') {
      let newTag;
      newTag = text.slice(0, text.length);
      tagInput.current.value = '';
      setTags([...tags, { uuid: uuid(), text: newTag }]);
    }
  };

  const handleRemoveTag = (e, tagId) => {
    setTags(tags.filter((tag) => tag.uuid !== tagId));
  };

  return (
    <div className="tag-box">
      <label htmlFor="tagTextInput">{label}</label>
      <div
        className={`tag-wrapper ${
          isTagInputFocussed ? 'tag-wrapper-focus' : ''
        }`}
      >
        <div className="tag-container">
          {tags.map((tag) => (
            <Tag tag={tag} key={tag.uuid} handleRemoveTag={handleRemoveTag} />
          ))}
        </div>
        <input
          ref={tagInput}
          type="text"
          onChange={createTagOnChangeEvent}
          onKeyDown={createTagOnEnter}
          id="tagTextInput"
          placeholder="Enter your skills"
          onFocus={() => setIsTagInputFocussed(true)}
          onBlur={() => setIsTagInputFocussed(false)}
        />
      </div>
    </div>
  );
};

export default TagBox;
