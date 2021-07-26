import { useEffect, useState } from 'react';
import axios from 'axios';

const useSearchGithubUser = ({ username }) => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function getGithubUserProfile() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
        );
        setErrors(null);
        setGithubProjects(response.data);
      } catch (e) {
        setGithubProjects([]);
        setErrors(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [username]);

  return [githubProjects, errors, loading];
};

export default useSearchGithubUser;
