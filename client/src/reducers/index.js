import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import course from './course';
import deliverable from './deliverable';

export default combineReducers({
  alert,
  auth,
  course,
  deliverable
});
