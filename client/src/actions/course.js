import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_COURSES,
  COURSE_ERROR,
  DELETE_COURSE,
  ADD_COURSE,
  GET_COURSE,
  UPDATE_GRADE
} from './constants';
import getGradeLetter from '../utils/getGradeLetter';

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

//Get Course by ID
export const getCourse = id => async dispatch => {
  try {
    const res = await axios.get(`/api/courses/${id}`);

    dispatch({
      type: GET_COURSE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create a Course
export const createCourse = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/courses', formData, config);

    dispatch({
      type: ADD_COURSE,
      payload: res.data
    });

    alert('Course Created!'); //here you would actually dispatch setAlert function
    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};

//Edit a Course
export const editCourse = (
  formData,
  courseId,
  history,
  gradeUpdate = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.patch(`/api/courses/${courseId}`, formData, config);

    dispatch({
      type: GET_COURSES,
      payload: res.data
    });

    if (!gradeUpdate) {
      alert('Course Updated!'); //here you would actually dispatch setAlert function
      history.push('/dashboard/');
    }
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};

//Delete a Course
export const deleteCourse = (courseId, history) => async dispatch => {
  try {
    const res = await axios.delete(`/api/courses/${courseId}`);

    dispatch({
      type: DELETE_COURSE,
      payload: courseId
    });

    alert('Course Deleted!'); //here you would actually dispatch setAlert function
    history.push('/dashboard/');
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};

//Update a courses grade
export const updateGrade = (
  deliverables,
  courseId,
  history
) => async dispatch => {
  let grades = 0;
  let completion = 0;
  let grade = 0;
  let gradeLetter = '';

  if (
    deliverables !== null &&
    deliverables !== undefined &&
    deliverables.length > 0
  ) {
    deliverables.forEach(deliverable => {
      completion += deliverable.weight;
      grades += deliverable.grade * deliverable.weight;
    });
    grade = grades / completion;
    gradeLetter = getGradeLetter(grade);
  } else {
    grade = 0;
    gradeLetter = 'N/A';
    completion = 0;
  }

  const formData = {
    grade: Math.round(grade * 10) / 10,
    gradeletter: gradeLetter,
    completion: completion
  };

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.patch(`/api/courses/${courseId}`, formData, config);
    dispatch({
      type: UPDATE_GRADE,
      payload: formData
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};
