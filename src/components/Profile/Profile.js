import React, { useRef } from 'react';
import { useState } from 'react';
import { EXPERIENCE } from '../../constants';
import Card from '../Common/Card/Card';
import FormInput from '../Common/FormInput/FormInput';
import TagBox from '../Common/TagBox/TagBox';
import Github from '../Github/Github';
import './Profile.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateProfile } from '../../reducer/profile/actionCreator';
import FormInputErrorMessage from '../Common/FormInputErrorMessage/FormInputErrorMessage';
import { useHistory } from 'react-router-dom';
import ImageUpload from '../ImageUpload/ImageUpload';
import uploadPic from '../../helper/uploadPicToCloudinary';
import SingleSelect from '../Common/SingleSelect/SingleSelect';

const Profile = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferredLocation: '',
    profilePic: '',
  });
  const [tags, setTags] = useState([]);
  const [githubUser, setGithubUser] = useState('');
  const [selectedProject, setSelectedProject] = useState([]);
  const [errors, setErrors] = useState({});
  const [experience, setExperience] = useState(null);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [highlighted, setHighlighted] = useState(false);
  const profilePicRef = useRef();

  let history = useHistory();
  const { darkTheme } = useSelector((state) => state.darkTheme);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'profilePic') {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }
    setFormData({ ...formData, [name]: value });

    const validationErrorsLength = Object.keys(errors).length > 0;
    if (validationErrorsLength) {
      validateForm();
    }
  };

  const validateForm = () => {
    const errorsObj = {};
    const { firstName, lastName, preferredLocation } = formData;
    let isValid = true;
    if (!firstName) {
      errorsObj.firstName = 'First name is required';
      isValid = false;
    } else {
      if (firstName.trim().length < 3) {
        errorsObj.firstName = 'First name has to be min 3 characters';
        isValid = false;
      } else if (firstName.trim().length > 20) {
        errorsObj.firstName =
          'First name cannot exceed more than 20 characters';
        isValid = false;
      }
    }
    if (!lastName) {
      errorsObj.lastName = 'Last name is required';
      isValid = false;
    } else {
      if (lastName.trim().length < 3) {
        errorsObj.lastName = 'Last name has to be min 3 characters';
        isValid = false;
      } else if (lastName.trim().length > 20) {
        errorsObj.lastName = 'Last name cannot exceed more than 20 characters';
        isValid = false;
      }
    }

    if (!preferredLocation) {
      errorsObj.preferredLocation = 'Preferred Location is required';
      isValid = false;
    } else {
      if (preferredLocation.trim().length < 3) {
        errorsObj.preferredLocation =
          'Preferred Location has to be min 3 characters';
        isValid = false;
      } else if (preferredLocation.trim().length > 20) {
        errorsObj.preferredLocation =
          'Preferred Location cannot exceed more than 20 characters';
        isValid = false;
      }
    }

    if (!experience) {
      errorsObj.experience = 'Experience is required';
      isValid = false;
    }

    if (!githubUser) {
      errorsObj.githubUser = 'Please enter your github user name';
      isValid = false;
    }
    setErrors(errorsObj);
    return isValid;
  };

  const resetFormValues = () => {
    setFormData({
      firstName: '',
      lastName: '',
      preferredLocation: '',
    });
    setTags([]);
    setGithubUser('');
    setSelectedProject([]);
    setErrors({});
    setExperience(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const uploadedProfilePicUrl = media ? await uploadPic(media) : '';
    const formSubmissionData = {
      ...formData,
      skills: tags,
      githubUser,
      githubProjects: selectedProject,
      profilePic: uploadedProfilePicUrl,
    };

    const isValidated = validateForm();
    if (isValidated) {
      dispatch(asyncCreateProfile(formSubmissionData)).then(
        (isUserProfileCreated) => {
          if (isUserProfileCreated) {
            resetFormValues();
            history.push('/dashboard');
          }
        },
      );
    }
  };

  return (
    <div className="profile-form-wrapper">
      <form className="form" autoComplete="off" onSubmit={handleFormSubmit}>
        <Card>
          <div className="card-title">Profile Details</div>
          <div className="card-content">
            <div>
              <ImageUpload
                mediaPreview={mediaPreview}
                setMediaPreview={setMediaPreview}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
                setMedia={setMedia}
                profilePicRef={profilePicRef}
                handleChange={handleInputChange}
              />
            </div>
            <div className="form-first-row">
              <div>
                <FormInput
                  type="text"
                  label="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder={'Enter First Name'}
                  formError={errors}
                />
              </div>
              <div>
                <FormInput
                  type="text"
                  label="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder={'Enter Last Name'}
                  formError={errors}
                />
              </div>
              <div>
                <FormInput
                  type="text"
                  label="Preferred Location"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleInputChange}
                  placeholder={'Enter Preferred Location'}
                  formError={errors}
                />
              </div>
            </div>

            <div className="exp-select">
              <div>Experience</div>
              <SingleSelect
                name="experience"
                options={EXPERIENCE}
                onChange={(e) => {
                  setErrors({ ...errors, experience: '' });
                  setExperience(e);
                }}
                value={experience}
                placeholder="Select Your Experience"
                id="experience"
                className="customSelect"
                currentThemeBG={darkTheme ? 'black' : 'white'}
                currentThemeColor={darkTheme ? 'white' : 'black'}
              />
              {errors && errors.experience ? (
                <FormInputErrorMessage errorMsg={errors.experience} />
              ) : (
                ''
              )}
            </div>
            <div className="form-third-row">
              <TagBox label="Skills" tags={tags} setTags={setTags} />
            </div>

            <div>
              <Github
                githubUser={githubUser}
                setGithubUser={setGithubUser}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                formError={errors}
                validateForm={validateForm}
                value={githubUser}
              />
            </div>
          </div>
          <div className="submit-btn-container">
            <button type="submit" className="primary-btn">
              Create Profile
            </button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default Profile;
