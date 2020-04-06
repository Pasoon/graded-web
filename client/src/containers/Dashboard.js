import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import { getCurrentUsersCourses } from '../actions/course';
import colors from '../styles/colors';
import styled from 'styled-components';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';

const Dashboard = ({
  getCurrentUsersCourses,
  auth: { user },
  course: { courses, loading }
}) => {
  useEffect(() => {
    getCurrentUsersCourses();
  }, []);

  console.log(courses);

  let renderCards =
    courses.length > 0
      ? courses.map(course => {
          return <CourseCard key={course._id} course={course} />;
        })
      : '';

  return loading && courses === null ? (
    <Spinner />
  ) : (
    <Container>
      <Header>
        <h1>Dashboard</h1>
        <hr />
      </Header>
      <p> Welcome {user && user.name} </p>
      {courses !== null ? (
        <Container>
          <Link to='/create-course'>
            <Button id='button-createCourse' title='Create Course' primary />
          </Link>
          <CausesContainer>{renderCards}</CausesContainer>
        </Container>
      ) : (
        <Fragment>
          <p>You have not yet added your courses, please create one</p>
          <Link to='/create-course'>Create a Course</Link>
        </Fragment>
      )}
    </Container>
  );
};

Dashboard.propTypes = {
  getCurrentUsersCourses: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CausesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  margin-bottom: 20px;
  margin-top: 50px;
  h1 {
    font-size: 40px !important;
  }
  hr {
    height: 0.2rem;
    width: 80%;
    background: ${colors.primary};
    border: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.2rem;
  }
`;

const mapStateToProps = state => ({
  auth: state.auth,
  course: state.course
});

export default connect(mapStateToProps, { getCurrentUsersCourses })(Dashboard);
