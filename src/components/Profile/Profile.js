import React from 'react';
import { useState } from 'react';
import { EXPERIENCE } from '../../constants';
import Card from '../Common/Card/Card';
import FormInput from '../Common/FormInput/FormInput';
import Select from '../Common/Select/Select';
import TagBox from '../Common/TagBox/TagBox';
import Github from '../Github/Github';
import './Profile.style.css';

const Profile = () => {
  const [formData, setFormData] = useState({});
  const [tags, setTags] = useState([]);
  const [githubUser, setGithubUser] = useState('');
  const [selectedProject, setSelectedProject] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formSubmissionData = {
      ...formData,
      skills: tags,
      githubUser,
      githubProjects: selectedProject,
    };

    console.log('Form Submission Data = ', formSubmissionData);
  };

  return (
    <div className="profile-form-wrapper">
      <form className="form" autoComplete="off" onSubmit={handleFormSubmit}>
        <Card>
          <div className="card-title">Personal Details</div>
          <div className="card-content">
            <div className="form-first-row">
              <div>
                <FormInput
                  type="text"
                  label="First name"
                  name="firstName"
                  onChange={handleInputChange}
                  placeholder={'Enter First Name'}
                />
              </div>
              <div>
                <FormInput
                  type="text"
                  label="Last name"
                  name="lastName"
                  onChange={handleInputChange}
                  placeholder={'Enter Last Name'}
                />
              </div>
              <div>
                <FormInput
                  type="text"
                  label="Preferred Location"
                  name="preferredLocation"
                  onChange={handleInputChange}
                  placeholder={'Enter Preferred Location'}
                />
              </div>
            </div>

            <div className="form-second-row">
              <Select
                label="Experience"
                name="experience"
                options={EXPERIENCE}
                handleDropdownChange={handleInputChange}
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
