import axios from 'axios';
import { setAlert } from './alert';
import { GET_COURSES, COURSE_ERROR } from './constants';

//Get Current Users Courses
export const getCurrentUsersCourses = () => async dispatch => {
  try {
    const res = await axios.get('/api/courses/me');

    dispatch({
      type: GET_COURSES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
