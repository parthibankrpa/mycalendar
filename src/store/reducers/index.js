import { combineReducers } from 'redux';
import userReducer from './userReducer';
import meetings from './meetings';




export default combineReducers({
  users: userReducer,
  meetings:meetings
})