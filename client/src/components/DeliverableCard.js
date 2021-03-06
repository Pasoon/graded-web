import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deleteDeliverable } from '../actions/deliverable';
import { updateGrade } from '../actions/course';
import { connect } from 'react-redux';

const DeliverableCard = ({
  deleteDeliverable,
  updateGrade,
  deliverable,
  history
}) => {
  const onDelete = async e => {
    e.preventDefault();
    if (window.confirm('Are you sure you wish to delete this deliverable?')) {
      deleteDeliverable(deliverable._id, history);
    }
  };

  return (
    <Container>
      <Name>{deliverable.name}</Name>
      <Weight>{'W:' + deliverable.weight}</Weight>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grade>{deliverable.grade + '%'}</Grade>
        <Delete onClick={e => onDelete(e)}>x</Delete>
      </div>
    </Container>
  );
};

DeliverableCard.propTypes = {
  deliverable: PropTypes.object.isRequired
};

const Container = styled.div`
  display: flex;
  padding: 5px;
  margin: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  width: 360px;
  position: relative;
  box-shadow: 0px 0px 3px 0px rgba(173, 173, 173, 1);
`;

const Name = styled.h4`
  font-size: 20px;
`;

const Grade = styled.h4``;

const Weight = styled.h4``;

const Delete = styled.h4`
  color: red;
  cursor: pointer;
  padding: 5px 5px 5px 10px;
  font-size: 20px;
`;

export default connect(null, { deleteDeliverable })(DeliverableCard);
