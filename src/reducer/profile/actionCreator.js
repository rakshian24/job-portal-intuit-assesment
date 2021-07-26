import { CREATE_PROFILE } from './actionType';

export const createProfile = (profile) => {
  return {
    type: CREATE_PROFILE,
    payload: profile,
  };
};

export const asyncCreateProfile = (profile) => {
  return function (dispatch) {
    dispatch(createProfile(profile));
    return new Promise((res, rej) => {
      res(true);
    });
  };
};
