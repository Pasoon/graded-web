import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import colors from '../styles/colors';
import PropTypes from 'prop-types';
import { createDeliverable } from '../actions/deliverable';
import { updateGrade } from '../actions/course';

const CreateDeliverable = ({
  updateGrade,
  createDeliverable,
  deliverable: { deliverables },
  history,
  match: {
    params: { id }
  }
}) => {
  const [formData, setFormData] = useState({
    name: '',
    weight: 0,
    grade: 0
  });

  const { name, weight, grade } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    createDeliverable(formData, id, history);
    //updateGrade(deliverables, id, history);
  };

  return (
    <Container>
      <Header>
        <h1>Create a Deliverable</h1>
        <hr />
      </Header>
      <FormContainer>
        <InputContainer>
          <Input
            id='input-deliverablename'
            name='name'
            placeholder='Deliverable Name'
            value={name}
            onChange={e => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <p>Weight</p>
          <Input
            id='input-deliverablweight'
            name='weight'
            placeholder='Deliverable Weight'
            value={weight}
            min='1'
            max='100'
            type='number'
            onChange={e => onChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <p>Grade</p>
          <Input
            id='input-deliverablgrade'
            name='grade'
            placeholder='Deliverable Grade'
            value={grade}
            min='1'
            max='100'
            type='number'
            onChange={e => onChange(e)}
          />
        </InputContainer>
        <Button
          id='button-createDeliverable'
          primary
          title='Create'
          handleClick={e => onSubmit(e)}
        ></Button>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 600px;
  margin: 5px;
`;

CreateDeliverable.propTypes = {
  createDeliverable: PropTypes.func.isRequired,
  updateGrade: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  deliverable: state.deliverable
});

export default connect(mapStateToProps, { createDeliverable, updateGrade })(
  withRouter(CreateDeliverable)
);
