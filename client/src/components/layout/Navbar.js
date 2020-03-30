import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>
        <Link to='/'>Graded</Link>
      </h1>
      <Ul>
        <Li>
          <Link to='/register'>Register</Link>
        </Li>
        <Li>
          <Link to='/login'>Login</Link>
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
  display: flex;
  margin: 5px;
  list-style: none;
`;

export default Navbar;
