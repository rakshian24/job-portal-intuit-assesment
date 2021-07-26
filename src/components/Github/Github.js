import React, { useState } from 'react';
import { useEffect } from 'react';
import SearchBox from '../Common/SearchBox/SearchBox';
import GithubProjects from '../GithubProjects/GithubProjects';

const Github = () => {
  const [githubUser, setGithubUser] = useState('');
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
          <GithubProjects username={githubUser} />
        </div>
      ) : null}
    </div>
  );
};

export default Github;
