import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Redirect, Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Link to={'/edit-course/' + course._id}>
      <Container>
        <Content>
          <Name>{course.name}</Name>
          <Code>{course.code}</Code>
          <Grade>{course.gradeletter}</Grade>
        </Content>
      </Container>
    </Link>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired
};

const Container = styled.div`
  display: flex;
  margin: 0 10px 20px 10px;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 10px;
  width: 260px;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 0px 3px 0px rgba(173, 173, 173, 1);
  transition: box-shadow 0.2s linear;
  &:hover {
    box-shadow: 0px 5px 25px 0px rgba(173, 173, 173, 1);
  }
`;

const Grade = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const Name = styled.h2`
  margin: 0px;
`;

const Code = styled.h3`
  margin: 0px;
`;

export default CourseCard;
