import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

export default class Input extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledInput {...this.props} />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s linear;
  margin-right: 10px;
  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(173, 173, 173, 1);
  }
`;

const StyledInput = styled.input`
  width: 400px;
  color: ${colors.primary};
  border-radius: 20px 20px 20px 20px;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.secondary};
  padding-left: 10px;
  font-size: 16px;
  :focus {
    outline: none;
  }
  ::placeholder {
    opacity: 0.5; /* Firefox */
  }
  height: 35px;
`;

const StyledLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 65px;
  height: 35px;
  background-color: ${colors.primaryAccent};
  border-radius: 20px 0 0 20px;
`;
