import React, { Fragment, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <FormContainer>
        <InputContainer>
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
        </InputContainer>
        <Button
          id='button-login'
          title='Sign in'
          primary
          handleClick={e => onSubmit(e)}
        />
        <p>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </FormContainer>
    </Fragment>
  );
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
