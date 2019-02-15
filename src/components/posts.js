import React, { Component } from 'react';
import styled from 'styled-components';

import PostItem from './postItem'

const PostList = styled.div`
  display: block;
  margin: 30px 0;
`


const Posts = ({post}) => {

  const elem = post.map((item) => {
    const {...itemProps} = item;
    return (
      <PostItem {...itemProps}/>
    )
  })

  return(
    <PostList>
      {elem}
    </PostList>
  );
}

export default Posts;