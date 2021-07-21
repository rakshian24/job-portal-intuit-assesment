import { CHANGE_ROLE } from './actionType';

export const changeRole = (role) => {
  return {
    type: CHANGE_ROLE,
    payload: role
  };
};
