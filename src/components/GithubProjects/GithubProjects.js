import React from 'react';
import useSearchGithubUser from '../../hooks/useSearchGithubUser';
import Loader from '../Common/Loader/Loader';
import MultiSelect from '../Common/MultiSelect/MultiSelect';

const GithubProjects = ({ username, selectedValue, setSelected }) => {
  const [githubProjects, errors, loading] = useSearchGithubUser({ username });

  if (errors) {
    return <p>Something Went Wrong :(</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {githubProjects.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '4px' }}>Github Projects</label>
          <MultiSelect
            options={githubProjects}
            value={selectedValue}
            onChange={setSelected}
            loading={loading}
            selectAllType="Select All"
            placeholder="Select Your Github Projects"
          />
        </div>
      ) : (
        <p>No Projects Found</p>
      )}
    </div>
  );
};

export default GithubProjects;
