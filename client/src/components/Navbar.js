import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>
        <StyledLink to='/'>Graded</StyledLink>
      </h1>
      <Ul>
        <Li>
          <StyledLink to='/register'>Register</StyledLink>
        </Li>
        <Li>
          <StyledLink to='/login'>Login</StyledLink>
        </Li>
      </Ul>
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

const StyledLink = styled(Link)`
  color: white;
`;

export default Navbar;
