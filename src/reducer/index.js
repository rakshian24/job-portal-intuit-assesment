import { combineReducers } from 'redux';
import profileReducer from './profile/profileReducer';
import roleReducer from './role/roleReducer';

const rootReducer = combineReducers({
  role: roleReducer,
  profile: profileReducer
});

export default rootReducer;
