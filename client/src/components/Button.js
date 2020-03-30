import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

export default class Button extends Component {
  render() {
    return (
      <StyledButton
        primary={this.props.primary}
        onClick={this.props.handleClick}
      >
        <h4>{this.props.title}</h4>
        {this.props.children}
      </StyledButton>
    );
  }
}

const StyledButton = styled.div`
  background: ${props =>
    props.primary ? `${colors.primaryAccent}` : `${colors.secondary}`};
  color: ${props =>
    props.primary ? `${colors.background}` : `${colors.primary}`};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 200px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  cursor: pointer;
`;
