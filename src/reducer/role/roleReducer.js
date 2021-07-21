import { CHANGE_ROLE } from './actionType';

const roleInitialState = {
  role: '',
};

const roleReducer = (state = roleInitialState, action) => {
  switch (action.type) {
    case CHANGE_ROLE:
      return {
        ...state,
        role: action.payload,
      };

    default:
      return state;
  }
};

export default roleReducer;
