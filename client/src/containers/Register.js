import React, { Fragment, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onRegister = e => {
    e.preventDefault();
    if (password != password2) {
      console.log('Passwords do not match!');
    } else {
      console.log(formData);
    }
  };
  return (
    <Fragment>
      <FormContainer>
        <InputContainer>
          <Input
            id='input-name'
            name='name'
            size='large'
            type='name'
            placeholder='Name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <Input
            id='input-email'
            name='email'
            size='large'
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <Input
            id='input-password'
            name='password'
            size='large'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => onChange(e)}
            required
          />
          <Input
            id='input-password-confirm'
            name='password2'
            size='large'
            type='password'
            placeholder='Password Confirmation'
            value={password2}
            onChange={e => onChange(e)}
            required
          />
        </InputContainer>
        <Button
          id='button-register'
          title='Register'
          primary
          handleClick={e => onRegister(e)}
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
