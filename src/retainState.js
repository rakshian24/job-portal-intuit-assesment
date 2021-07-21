export const loadState = () => {
  const state = localStorage.getItem('job_portal_state');
  if (state === null) {
    return undefined;
  }
  return JSON.parse(state);
};

export const saveState = (state) => {
  const currentState = JSON.stringify(state);
  localStorage.setItem('job_portal_state', currentState);
};

export const savedState = loadState();

export const loadInititalAppLoadState = () => {
  const initState = {
    role : ''
  }
  saveState(initState)
}
