import { CHANGE_ROLE } from './actionType';

export const changeRole = (role) => {
  return {
    type: CHANGE_ROLE,
    payload: role,
  };
};

export const asyncChangeRole = (role) => {
  return function (dispatch) {
    dispatch(changeRole(role));
    return new Promise((res, rej) => {
      res(true);
    });
  };
};
