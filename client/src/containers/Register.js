import React, { Fragment } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';

const Register = () => {
  return (
    <Fragment>
      <FormContainer>
        <InputContainer>
          <InputTitle>Email</InputTitle>
          <Input
            id='input-email'
            name='email'
            size='large'
            type='email'
            placeholder='john.doe@email.com'
          />
          <InputTitle>Password</InputTitle>
          <Input
            id='input-password'
            name='password'
            size='large'
            type='password'
            placeholder='*********'
          />
          <InputTitle>Confirm Password</InputTitle>
          <Input
            id='input-password-confirm'
            name='password-confirm'
            size='large'
            type='password'
            placeholder='*********'
          />
        </InputContainer>
        <Button
          id='button-register'
          title='Register'
          primary
          handleClick={() => {}}
        />
      </FormContainer>
    </Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
  margin: 5px;
`;

const InputTitle = styled.h5`
  text-align: left;
  margin: 10px 0 0 0;
  width: 100%;
`;

export default Register;
