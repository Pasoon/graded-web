import {
  GET_COURSES,
  CLEAR_COURSES,
  COURSE_ERROR,
  ADD_COURSE,
  DELETE_COURSE,
  GET_COURSE
} from '../actions/constants';

const initialState = {
  course: null,
  courses: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false
      };
    case GET_COURSE:
      return {
        ...state,
        course: payload,
        loading: false
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [payload, ...state.courses]
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(course => course._id != payload),
        loading: false
      };
    case COURSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_COURSES:
      return {
        ...state,
        courses: null,
        loading: false
      };
    default:
      return state;
  }
}
