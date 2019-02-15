import React, { Component } from 'react';
import styled from 'styled-components';

const PostWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
  border-bottom: 1px solid #000;
`

const PostImg = styled.div`
  width: 20%;
  img {
    width: 100%;
    height: 100%;
  }
`

const PostText = styled.div`
  width: 70%;
  font-size: 16px;
  a {
    text-decoration: none;
    color: #000;
    display: block;
    font-size: 19px;
    margin-top: 30px;
  }
`

export default class PostItem extends Component {
  render() {
    const {text} = this.props; 
    // const {url} = this.props.attachments[0].photo.sizes[0];
    const link = 'https://vk.com/xfilm?w=wall-26750264_'+this.props.id;
    return(
      <PostWrap>
        <PostImg>
          <img src="https://sun7-2.userapi.com/c850232/v850232567/dc175/Bx0Qdbcn_a0.jpg" alt=''></img>
        </PostImg>
        <PostText>
          {text}
          <a href={link}>Ссылка на пост</a>
        </PostText>
      </PostWrap>

    );
  }
}