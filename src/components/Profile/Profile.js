import React from 'react';
import { useState } from 'react';
import { EXPERIENCE } from '../../constants';
import Card from '../Common/Card/Card';
import FormInput from '../Common/FormInput/FormInput';
import Select from '../Common/Select/Select';
import TagBox from '../Common/TagBox/TagBox';
import Github from '../Github/Github';
import './Profile.style.css';
import { useAsyncState } from '../../hooks/useAsyncState';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    experience: '',
    preferredLocation: '',
  });
  const [tags, setTags] = useState([]);
  const [githubUser, setGithubUser] = useState('');
  const [selectedProject, setSelectedProject] = useState([]);
  const [errors, setErrors] = useAsyncState({});

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
    const { firstName, lastName, preferredLocation, experience } = formData;
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

    if (!experience || experience === 'Please select your experience') {
      errorsObj.experience = 'Experience is required';
    }

    if (!githubUser) {
      errorsObj.githubUser = 'Please enter your github user name';
    }

    const validationErrors = await setErrors(errorsObj);
    return Object.keys(validationErrors).length === 0;
  }

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

    console.log('isValidated = ', isValidated);
    if (isValidated) {
      console.log('No Validation Errors');
    } else {
      console.log('Validation Errors = ', errors);
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
                  onChange={handleInputChange}
                  placeholder={'Enter Preferred Location'}
                  formError={errors}
                />
              </div>
            </div>

            <div className="form-second-row">
              <Select
                label="Experience"
                name="experience"
                options={EXPERIENCE}
                handleDropdownChange={handleInputChange}
                formError={errors}
              />
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
