import { TOGGLE_THEME } from './actionType';

const themeIntitialState = {
  darkTheme: false,
};

const themeReducer = (state = themeIntitialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkTheme: action.payload,
      };

    default:
      return state;
  }
};

export default themeReducer;
