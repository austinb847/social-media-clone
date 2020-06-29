import React from 'react';
import PostStatus from './PostStatus';
import Post from './Post';

const postList = [
  {
    userName: "Austin123",
    status: "I like cheese",
    image: "{EXAMPLE URL}"
  },
  {
    userName: "Dan456",
    status: "I also like cheese",
    image: "{EXAMPLE URL}"
  },
  {
    userName: "bob799",
    status: "Cheese SUCKS",
    image: "{EXAMPLE URL}"
  }
];

function PostScroll(){
  return (
    <React.Fragment>
      <PostStatus />
      <hr/>
     {postList.map((post, index) =>
        <Post userName={post.userName}
          status={post.status}
          image={post.image}
          key={index}/>
     )}
    </React.Fragment>
  )
}

export default PostScroll;