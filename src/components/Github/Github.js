import React, { useState } from 'react';
import { useEffect } from 'react';
import SearchBox from '../Common/SearchBox/SearchBox';
import GithubProjects from '../GithubProjects/GithubProjects';

const Github = ({githubUser, setGithubUser, selectedProject, setSelectedProject}) => {
  const [showProjectsSection, setShowProjectsSection] = useState(false);

  useEffect(() => {
    if (githubUser) {
      setShowProjectsSection(true);
    }
  }, [githubUser]);

  const handleSubmit = (e, userName) => {
    e.preventDefault();
    setGithubUser(userName);
  };
  return (
    <div>
      <SearchBox
        label="Github Profile"
        placeholder="Enter Your Github Username"
        inputBoxFlexSize={0.3}
        btnText="Search User"
        handleSubmit={handleSubmit}
        name="githubUsername"
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
