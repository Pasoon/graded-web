import axios from 'axios';
import { setAlert } from './alert';
import { GET_DELIVERABLES, DELIVERABLE_ERROR } from './constants';

//Get Current Courses Deliverables
export const getDeliverables = courseId => async dispatch => {
  try {
    const res = await axios.get(`/api/deliverables/${courseId}`);

    dispatch({
      type: GET_DELIVERABLES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DELIVERABLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create a Deliverable
export const createDeliverable = (
  formData,
  courseId,
  history
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(
      `/api/deliverables/${courseId}`,
      formData,
      config
    );

    dispatch({
      type: GET_DELIVERABLES,
      payload: res.data
    });

    alert('Deliverable Created!'); //here you would actually dispatch setAlert function
    history.goBack();
  } catch (err) {
    dispatch({
      type: DELIVERABLE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};

//Edit a Deliverable i want to just update grade here
export const editDeliverable = (
  formData,
  deliverableId,
  history
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.patch(
      `/api/deliverables/${deliverableId}`,
      formData,
      config
    );

    dispatch({
      type: GET_DELIVERABLES,
      payload: res.data
    });

    alert('Deliverable Updated!'); //here you would actually dispatch setAlert function
    history.goBack();
  } catch (err) {
    dispatch({
      type: DELIVERABLE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};

//Delete a Deliverable
export const deleteDeliverable = (deliverableId, history) => async dispatch => {
  try {
    console.log(courseId);
    const res = await axios.delete(`/api/deliverables/${deliverableId}`);

    dispatch({
      type: GET_DELIVERABLES,
      payload: res.data
    });

    alert('Deliverable Deleted!'); //here you would actually dispatch setAlert function
    history.goBack();
  } catch (err) {
    dispatch({
      type: DELIVERABLE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};
