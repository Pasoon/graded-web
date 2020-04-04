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

//Create or Update Course
export const createCourse = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/courses', formData, config);

    dispatch({
      type: GET_COURSES,
      payload: res.data
    });

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
