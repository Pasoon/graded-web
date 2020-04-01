import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './containers/Landing';
import Register from './containers/Register';
import Login from './containers/Login';
import Alert from './components/Alert';

import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  //set global header with token if there is one
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); //the square brackets makes it run only once, we only want it to run once, its like componentdidmount when u add square brackets
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Login} />
          {/* <Alert> */}
          <section className='container'>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
          {/* </Alert> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
