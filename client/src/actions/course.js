import axios from 'axios';
import { setAlert } from './alert';
import { GET_COURSES, COURSE_ERROR } from './constants';
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
      type: GET_COURSES,
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

    alert('Course Updated!'); //here you would actually dispatch setAlert function
    if (!gradeUpdate) {
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
    console.log(courseId);
    const res = await axios.delete(`/api/courses/${courseId}`);

    dispatch({
      type: GET_COURSES,
      payload: res.data
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
export const updateGrade = (course, history) => async => {
  const deliverables = course.deliverables;
  const sum = 0;
  const grade = 0;
  const gradeLetter = '';

  deliverables.forEach(deliverable => {
    sum += deliverable.grade;
  });

  grade = sum / deliverables.length;
  gradeLetter = getGradeLetter(grade);

  const formData = {
    grade: grade,
    gradeletter: gradeLetter
  };

  editCourse(formData, course._id, history, true);
};
