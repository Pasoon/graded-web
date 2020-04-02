import { GET_COURSES, CLEAR_COURSES, COURSE_ERROR } from '../actions/constants';

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
