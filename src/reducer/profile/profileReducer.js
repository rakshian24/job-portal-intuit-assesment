import { CREATE_PROFILE } from './actionType';

const profileInitialState = {
  user: {},
};

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
