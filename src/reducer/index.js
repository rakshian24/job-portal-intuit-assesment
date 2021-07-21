import { combineReducers } from 'redux';
import roleReducer from './role/roleReducer';

const rootReducer = combineReducers({
  role: roleReducer,
});

export default rootReducer;
