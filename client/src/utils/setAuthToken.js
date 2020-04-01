import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //if it is a token, set it as global headers
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    //if we what we pass is not a token delete it from global headers
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
