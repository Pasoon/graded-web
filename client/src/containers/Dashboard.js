import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import { getCurrentUsersCourses } from '../actions/course';

const Dashboard = ({
  getCurrentUsersCourses,
  auth: { user },
  course: { courses, loading }
}) => {
  useEffect(() => {
    getCurrentUsersCourses();
  }, []);
  return loading && courses === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard</h1>
      <p> Welcome {user && user.name} </p>
      {courses !== null ? (
        <Fragment>Guy has courses tho</Fragment>
      ) : (
        <Fragment>
          <p>You have not yet added your courses, please create one</p>
          <Link to='/create-course'>Create a Course</Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentUsersCourses: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  course: state.course
});

export default connect(mapStateToProps, { getCurrentUsersCourses })(Dashboard);
