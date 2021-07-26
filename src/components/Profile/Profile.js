import React from 'react';
import { useState } from 'react';
import { EXPERIENCE } from '../../constants';
import Card from '../Common/Card/Card';
import FormInput from '../Common/FormInput/FormInput';
import TagBox from '../Common/TagBox/TagBox';
import Github from '../Github/Github';
import './Profile.style.css';
import { useAsyncState } from '../../hooks/useAsyncState';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateProfile } from '../../reducer/profile/actionCreator';
import Select from 'react-select';
import FormInputErrorMessage from '../Common/FormInputErrorMessage/FormInputErrorMessage';

const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferredLocation: '',
  });
  const [tags, setTags] = useState([]);
  const [githubUser, setGithubUser] = useState('');
  const [selectedProject, setSelectedProject] = useState([]);
  const [errors, setErrors] = useAsyncState({});
  const [experience, setExperience] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const validationErrorsLength = Object.keys(errors).length > 0;
    if (validationErrorsLength) {
      validateForm();
    }
  };

  async function validateForm() {
    const errorsObj = {};
    const { firstName, lastName, preferredLocation } = formData;
    if (!firstName) {
      errorsObj.firstName = 'First name is required';
    } else {
      if (firstName.length < 3) {
        errorsObj.firstName = 'First name has to be min 3 characters';
      } else if (firstName.length > 20) {
        errorsObj.firstName =
          'First name cannot exceed more than 20 characters';
      }
    }
    if (!lastName) {
      errorsObj.lastName = 'Last name is required';
    } else {
      if (lastName.length < 3) {
        errorsObj.lastName = 'Last name has to be min 3 characters';
      } else if (lastName.length > 20) {
        errorsObj.lastName = 'Last name cannot exceed more than 20 characters';
      }
    }

    if (!preferredLocation) {
      errorsObj.preferredLocation = 'Preferred Location is required';
    } else {
      if (preferredLocation.length < 3) {
        errorsObj.preferredLocation =
          'Preferred Location has to be min 3 characters';
      } else if (preferredLocation.length > 20) {
        errorsObj.preferredLocation =
          'Preferred Location cannot exceed more than 20 characters';
      }
    }

    if (!experience) {
      errorsObj.experience = 'Experience is required';
    }

    if (!githubUser) {
      errorsObj.githubUser = 'Please enter your github user name';
    }

    const validationErrors = await setErrors(errorsObj);
    return Object.keys(validationErrors).length === 0;
  }

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
    setErrors({});
    const formSubmissionData = {
      ...formData,
      skills: tags,
      githubUser,
      githubProjects: selectedProject,
    };

    const isValidated = await validateForm();

    if (isValidated) {
      dispatch(asyncCreateProfile(formSubmissionData)).then(
        (isUserProfileCreated) => {
          if (isUserProfileCreated) {
            resetFormValues();
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
              <Select
                name="experience"
                options={EXPERIENCE}
                onChange={(e) => {
                  setErrors({ ...errors, experience: '' });
                  setExperience(e);
                }}
                value={experience}
                placeholder="Select Your Experience"
                id="experience"
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
