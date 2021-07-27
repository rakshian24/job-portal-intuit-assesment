import { combineReducers } from 'redux';
import profileReducer from './profile/profileReducer';
import roleReducer from './role/roleReducer';
import themeReducer from './theme/themeReducer';

const rootReducer = combineReducers({
  role: roleReducer,
  profile: profileReducer,
  darkTheme: themeReducer
});

export default rootReducer;
