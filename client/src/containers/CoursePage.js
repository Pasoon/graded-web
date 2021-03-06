import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import colors from '../styles/colors';
import styled from 'styled-components';
import Button from '../components/Button';
import DeliverableCard from '../components/DeliverableCard';
import { getCourse, deleteCourse } from '../actions/course';
import { getDeliverables } from '../actions/deliverable';
import { updateGrade } from '../actions/course';

const CoursePage = ({
  getCourse,
  deleteCourse,
  updateGrade,
  course: { course, loading },
  getDeliverables,
  deliverable: { deliverables },
  history,
  match: {
    params: { id }
  }
}) => {
  useEffect(() => {
    getCourse(id);
    getDeliverables(id);
  }, [getCourse, id]);

  const onDelete = async e => {
    e.preventDefault();
    if (window.confirm('Are you sure you wish to delete this course?')) {
      deleteCourse(course._id, history);
    }
  };

  let renderDeliverables = deliverables // checking if deliverables exists, if it does, check to see if length > 0 and then render it
    ? deliverables.length > 0
      ? deliverables.map(deliverable => {
          return (
            <DeliverableCard key={deliverable._id} deliverable={deliverable} />
          );
        })
      : ''
    : '';

  updateGrade(deliverables, id, history);
  return course ? (
    <Container>
      <Header>
        <h1>{course.name}</h1>
        <hr />
        <h2>{course.code}</h2>
      </Header>
      <HorizontalWrapper>
        <Link to={'/edit-course/' + course._id}>
          <Button id='edit-course' title='Edit Course' secondary />
        </Link>
        <DeleteButton id='delete-course' onClick={e => onDelete(e)}>
          Delete Course
        </DeleteButton>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <VerticalWrapper>
          <h2>{course.gradeletter}</h2>
          <h3>Grade Letter</h3>
        </VerticalWrapper>
        <VerticalWrapper>
          <h2>{course.grade + '%'}</h2>
          <h3>Grade Percentage</h3>
        </VerticalWrapper>
        <VerticalWrapper>
          <h2>{course.completion + '%'}</h2>
          <h3>Course Completion</h3>
        </VerticalWrapper>
      </HorizontalWrapper>
      {deliverables !== null && deliverables.length > 0 ? ( //change this to deliverables
        <Container>
          <Link to={'/create-deliverable/' + id}>
            <Button
              id='create-deliverable'
              title='Create Deliverable'
              primary
            />
          </Link>
          <DeliverablesContainer>{renderDeliverables}</DeliverablesContainer>
        </Container>
      ) : (
        <Fragment>
          <p>
            You have not yet added any deliverables to this course, please
            create one
          </p>
          <Link to={'/create-deliverable/' + id}>Create a Deliverable</Link>
        </Fragment>
      )}
    </Container>
  ) : (
    <Spinner />
  );
};

CoursePage.propTypes = {
  getCourse: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  updateGrade: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  getDeliverables: PropTypes.func.isRequired,
  deliverable: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
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
  course: state.course,
  deliverable: state.deliverable
});

export default connect(mapStateToProps, {
  getCourse,
  deleteCourse,
  getDeliverables,
  updateGrade
})(CoursePage);
