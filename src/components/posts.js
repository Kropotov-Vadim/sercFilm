import React, { Component } from 'react';
import styled from 'styled-components';

import PostItem from './postItem'

const PostList = styled.div`
  display: block;
  margin: 30px 0;
`


const Posts = ({post}) => {

  const elem = post.map((item) => {
    if (item.marked_as_ads === 0){
      const {...itemProps} = item;
      return (
        <PostItem {...itemProps}/>
      )
    }
    return false;
  })

  return(
    <PostList>
      {elem}
    </PostList>
  );
}

export default Posts;