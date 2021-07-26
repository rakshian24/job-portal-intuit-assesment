import React, { useState } from 'react';
import useSearchGithubUser from '../../hooks/useSearchGithubUser';
import Loader from '../Common/Loader/Loader';
import MultiSelect from '../Common/MultiSelect/MultiSelect';

const GithubProjects = ({ username }) => {
  const [githubProjects, errors, loading] = useSearchGithubUser({ username });
  const [selectedVal, setSelectedVal] = useState([]);

  if (errors) {
    return <p>Something Went Wrong :(</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {/* {githubProjects.length > 0 ? (
        githubProjects.map((project) => <p key={project.id}>{project.name}</p>)
      ) : (
        <p>No Projects Found</p>
      )} */}
      {/* <MultiSelect
        options={[
          { id: 1, name: 'Cool' },
          { id: 2, name: 'Hot' },
          { id: 3, name: 'Humid' },
          { id: 4, name: 'Moist' },
        ]}
        value={selectedVal}
        onChange={(e) => {
          console.log(e);
          setSelectedVal(e);
        }}
        loading={loading}
        selectAllType="Select All"
        placeholder="Select Projects"
      /> */}
      {githubProjects.length > 0 ? (
        <MultiSelect
          options={githubProjects}
          value={selectedVal}
          onChange={(e) => {
            console.log(e);
            setSelectedVal(e);
          }}
          loading={loading}
          selectAllType="Select All"
          placeholder="Select Projects"
        />
      ) : (
        <p>No Projects Found</p>
      )}
    </div>
  );
};

export default GithubProjects;
