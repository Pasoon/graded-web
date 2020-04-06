import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
//import { getCurrentUsersCourses } from '../actions/course';
import colors from '../styles/colors';
import styled from 'styled-components';
import Button from '../components/Button';
//import DeliverableCard from '../components/DeliverableCard';

const CoursePage = ({
  //getDeliverables,
  auth: { user },
  course: { courses, loading },
  match: {
    params: { id }
  }
}) => {
  const [currentCourse, setCurrentCourse] = useState(null);
  useEffect(() => {
    //getDeliverables();
    console.log(id + ' / ' + courses);
    const currentCourse = courses.find(course => course._id === id);
    setCurrentCourse(currentCourse);
  }, []);

  console.log(currentCourse);

  return currentCourse ? (
    <Container>
      <Header>
        <h1>{currentCourse.name}</h1>
        <hr />
        <h2>{currentCourse.code}</h2>
      </Header>
      {courses !== null && courses.length > 0 ? ( //change this to deliverables
        <Container>
          <Link to='/create-course'>
            <Button
              id='button-deliverable'
              title='Create Deliverable'
              primary
            />
          </Link>
          {/* <CoursesContainer>{renderCards}</CoursesContainer> */}
        </Container>
      ) : (
        <Fragment>
          <p>
            You have not yet added any deliverables to this course, please
            create one
          </p>
          <Link to='/create-deliverable'>Create a Deliverable</Link>
        </Fragment>
      )}
    </Container>
  ) : (
    <Spinner />
  );
};

CoursePage.propTypes = {
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

const CoursesContainer = styled.div`
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

export default connect(mapStateToProps, null)(CoursePage);
