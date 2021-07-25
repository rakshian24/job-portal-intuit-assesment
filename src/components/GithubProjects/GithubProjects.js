import React from 'react';
import useSearchGithubUser from '../../hooks/useSearchGithubUser';
import Loader from '../Common/Loader/Loader';

const GithubProjects = ({ username }) => {
  // console.log('username in Pro Comp = ', username);
  const [githubProjects, errors, loading] = useSearchGithubUser({ username });

  console.log('githubProjects in Comp = ', githubProjects);

  if (errors) {
    console.log("ERROR IS PRESENT")
    return <p>Something Went Wrong :(</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {githubProjects.length > 0 ? (
        githubProjects.map((project) => <p key={project.id}>{project.name}</p>)
      ) : (
        <p>No Projects Found</p>
      )}
    </div>
  );
};

export default GithubProjects;
