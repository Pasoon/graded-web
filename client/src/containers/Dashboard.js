import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentUsersCourses } from '../actions/course';

const Dashboard = ({ getCurrentUsersCourses, auth, courses }) => {
  useEffect(() => {
    getCurrentUsersCourses();
  }, []);
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  getCurrentUsersCourses: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  courses: state.courses
});

export default connect(mapStateToProps, { getCurrentUsersCourses })(Dashboard);
