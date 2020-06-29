import React from 'react';
import Header from './Header';
import UserStats from './UserStats';
import UserBio from './UserBio';
import PostScroll from './PostScroll';
import FriendList from './FriendList';

function App(){
  return (
    <React.Fragment>
      <Header />
      <UserStats />
      <UserBio />
      <PostScroll />
      <FriendList />
    </React.Fragment>
  )
}

export default App;
