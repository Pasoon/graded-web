import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Redirect } from 'react-router-dom';

const courseCard = ({ course }) => {
  return (
    <div onClick={() => {}}>
      <Container>
        <Content>
          <Title>{course.name}</Title>
          <Grade>A+</Grade>
        </Content>
      </Container>
    </div>
  );
};

courseCard.propTypes = {
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

const Grade = styled.p`
  height: 150px;
  width: 100%;
  text-align: center;
  font-size: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const Title = styled.h3`
  margin: 0px;
`;

export default courseCard;
