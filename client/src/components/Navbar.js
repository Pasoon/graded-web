import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Ul>
      <Li>
        <StyledA onClick={logout}>Logout</StyledA>
      </Li>
    </Ul>
  );

  const guestLinks = (
    <Ul>
      <Li>
        <StyledLink to='/register'>Register</StyledLink>
      </Li>
      <Li>
        <StyledLink to='/login'>Login</StyledLink>
      </Li>
    </Ul>
  );

  return (
    <StyledNavbar>
      <h1>
        <StyledLink to='!#'>Graded</StyledLink>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${colors.primaryAccent};
  color: white;
  position: fixed;
  z-index: 1;
  padding: 15px;
  width: calc(100% - 30px);
  height: 40px;
  overflow: hidden;
  top: 0;
  margin: 0;
  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;
`;

const Ul = styled.ul`
  display: flex;
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin: 5px;
  list-style: none;
`;

const StyledA = styled.a`
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  cursor: pointer;
`;

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
