import React, { Fragment, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import colors from '../styles/colors';
import PropTypes from 'prop-types';

const CreateCourse = props => {
  const [formData, setFormData] = useState({
    name: '',
    code: ''
  });

  const { name, code } = formData;

  return (
    <Container>
      <Header>
        <h1>Create a Course</h1>
        <hr />
      </Header>
      <FormContainer>
        <InputContainer>
          <Input id='input-name' name='name' placeholder='Course Name' />
        </InputContainer>
        <InputContainer>
          <Input id='input-code' name='code' placeholder='Course Code' />
        </InputContainer>
        <Button id='button-createCause' primary title='Create'></Button>
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

CreateCourse.propTypes = {};

export default connect()(CreateCourse);
