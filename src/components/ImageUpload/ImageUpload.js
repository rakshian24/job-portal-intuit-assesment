import React from 'react';
import { BsImage } from 'react-icons/bs';
import './ImageUpload.style.css';

const ImageUpload = ({
  mediaPreview,
  setMediaPreview,
  highlighted,
  setHighlighted,
  handleChange,
  setMedia,
  profilePicRef,
}) => {
  return (
    <div className="image-upload-wrapper">
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        name="profilePic"
        ref={profilePicRef}
      />
      <div
        // onDragOver={(e) => {
        //   e.preventDefault();
        //   setHighlighted(true);
        // }}
        // onDragLeave={(e) => {
        //   e.preventDefault();
        //   setHighlighted(false);
        // }}
        // onDrop={(e) => {
        //   e.preventDefault();
        //   setHighlighted(true);
        //   const droppedFile = Array.from(e.dataTransfer.files);
        //   console.log("DROPPED FILE = ", droppedFile)
        //   setMedia(droppedFile[0]);
        //   setMediaPreview(URL.createObjectURL(droppedFile[0]));
        // }}
      >
        {mediaPreview === null ? (
          <div className="placeholder-icon-container">
            <BsImage
              className="image-icon"
              style={{ cursor: 'pointer' }}
              onClick={() => profilePicRef.current.click()}
              size={'25px'}
            />
            <div className="placeholder-icon-descr">Click to upload Image</div>
          </div>
        ) : (
          <>
            <div>
              <img
                className="uploaded-image"
                src={mediaPreview}
                style={{ cursor: 'pointer' }}
                alt="profile-pic"
                onClick={() => profilePicRef.current.click()}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
