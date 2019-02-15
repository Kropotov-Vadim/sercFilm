import React, { Component } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 15px 20px;
  border-radius: 10px;
  border: 3px solid ${props => props.active ? "#0ec71a" : "red" } ;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #020101;
`

export default class SelectBtn extends Component {
  constructor(props) {
    super(props);
    this.state={
      term: ''
    }
    this.onUpdateSerch = this.onUpdateSerch.bind(this);
  }

  onUpdateSerch() {
    const term = this.props.item.serch;
    this.setState(
      {term}
      );
    this.props.onUpdateSerch(term);
    this.props.getPosts();
    this.props.onActive(this.props.item.id);  
  }

  render() {
    return(
      <Btn id={this.props.item.id} active={this.props.item.active} serch={this.props.item.serch} onClick={this.onUpdateSerch} >
        {this.props.item.name}
      </Btn>
    );
  }
}