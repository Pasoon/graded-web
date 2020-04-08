import {
  GET_DELIVERABLES,
  CLEAR_DELIVERABLES,
  DELIVERABLE_ERROR
} from '../actions/constants';

const initialState = {
  deliverable: null,
  deliverables: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DELIVERABLES:
      return {
        ...state,
        deliverables: payload,
        loading: false
      };
    case DELIVERABLE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_DELIVERABLES:
      return {
        ...state,
        deliverables: null,
        loading: false
      };
    default:
      return state;
  }
}
