import React, { useState } from 'react';
import SearchBox from '../Common/SearchBox/SearchBox';
import GithubProjects from '../GithubProjects/GithubProjects';

const Github = ({
  githubUser,
  setGithubUser,
  selectedProject,
  setSelectedProject,
  formError,
  validateForm,
}) => {
  const [showProjectsSection, setShowProjectsSection] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (githubUser) {
      setShowProjectsSection(true);
    } else {
      setShowProjectsSection(false);
    }
  };
  return (
    <div>
      <SearchBox
        label="Github Profile"
        placeholder="Enter Your Github Username"
        inputBoxFlexSize={0.3}
        btnText="Search User"
        handleSubmit={handleSubmit}
        name="githubUser"
        formError={formError}
        validateForm={validateForm}
        githubUser={githubUser}
        setGithubUser={setGithubUser}
        setShowProjectsSection={setShowProjectsSection}
      />
      {showProjectsSection ? (
        <div>
          <GithubProjects
            username={githubUser}
            selectedValue={selectedProject}
            setSelected={(e) => setSelectedProject(e)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Github;
