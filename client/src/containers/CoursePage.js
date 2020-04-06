import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
//import { getCurrentUsersCourses } from '../actions/course';
import colors from '../styles/colors';
import styled from 'styled-components';
import Button from '../components/Button';
import DeliverableCard from '../components/DeliverableCard';

const CoursePage = ({
  //getDeliverables,
  auth: { user },
  course: { courses },
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
      <HorizontalWrapper>
        <Link to='/create-deliverable'>
          <Button id='edit-course' title='Edit Course' secondary />
        </Link>
        <DeleteButton id='delete-course'>Delete Course</DeleteButton>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <VerticalWrapper>
          <h2>{currentCourse.gradeletter}</h2>
          <h3>Grade Letter</h3>
        </VerticalWrapper>
        <VerticalWrapper>
          <h2>{currentCourse.grade}</h2>
          <h3>Grade Percentage</h3>
        </VerticalWrapper>
        <VerticalWrapper>
          <h2>{currentCourse.percentcomplete}</h2>
          <h3>Course Completion</h3>
        </VerticalWrapper>
      </HorizontalWrapper>
      {courses !== null && courses.length > 0 ? ( //change this to deliverables
        <Container>
          <Link to='/create-deliverable'>
            <Button
              id='create-deliverable'
              title='Create Deliverable'
              primary
            />
          </Link>
          <DeliverablesContainer>
            <DeliverableCard
              deliverable={{ name: 'Assignment', weight: '15%', grade: '90%' }}
            />
            <DeliverableCard
              deliverable={{ name: 'Assignment', weight: '15%', grade: '90%' }}
            />
            <DeliverableCard
              deliverable={{ name: 'Assignment', weight: '15%', grade: '90%' }}
            />
            <DeliverableCard
              deliverable={{ name: 'Assignment', weight: '15%', grade: '90%' }}
            />
          </DeliverablesContainer>
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

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 200px;
`;

const HorizontalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between:
    width: 100%;
`;

const DeliverablesContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const DeleteButton = styled.div`
  background: red;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 200px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  cursor: pointer;
`;

const mapStateToProps = state => ({
  auth: state.auth,
  course: state.course
});

export default connect(mapStateToProps, null)(CoursePage);
