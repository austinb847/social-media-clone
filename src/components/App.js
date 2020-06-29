import React from 'react';
import Header from './Header';
import UserStats from './UserStats';
import UserBio from './UserBio';
import PostScroll from './PostScroll';
import AddFriendList from './AddFriendList';

function App(){
  return (
    <React.Fragment>
      <Header />
      <UserStats />
      <UserBio />
      <PostScroll />
      <AddFriendList />
    </React.Fragment>
  )
}

export default App;
