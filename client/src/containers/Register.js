import React, { Fragment, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
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

  const onSubmit = async e => {
    e.preventDefault();
    if (password != password2) {
      alert('Passwords do not match!'); // you would dispatch setAlert here
    } else {
      register({ name, email, password });
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
          title='Sign Up'
          primary
          handleClick={e => onSubmit(e)}
        />
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </FormContainer>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

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

export default connect(null, { setAlert, register })(Register);
