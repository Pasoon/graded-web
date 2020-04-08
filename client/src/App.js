import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './containers/Landing';
import Register from './containers/Register';
import Login from './containers/Login';
import Alert from './components/Alert';
import Dashboard from './containers/Dashboard';
import CreateCourse from './containers/CreateCourse';
import EditCourse from './containers/EditCourse';
import CoursePage from './containers/CoursePage';
import PrivateRoute from './routing/PrivateRoute';
import CreateDeliverable from './containers/CreateDeliverable';

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
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-course'
                component={CreateCourse}
              />
              <PrivateRoute
                exact
                path='/edit-course/:id'
                component={EditCourse}
              />
              <PrivateRoute
                exact
                path='/course-page/:id'
                component={CoursePage}
              />
              <PrivateRoute
                exact
                path='/create-deliverable/:id'
                component={CreateDeliverable}
              />
            </Switch>
          </section>
          {/* </Alert> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
