import React from "react";
import Friend from "./Friend";

const masterFriendList = [
  {
    name: "John",
    image: "{IMAGE HERE}"
  },
  {
    name: "Alex",
    image: "{IMAGE HERE}"
  },
  {
    name: "Justin",
    image: "{IMAGE HERE}"
  }
]

function FriendList() {
  return (
    <React.Fragment>
      <h3>Friend List</h3>
      {masterFriendList.map((friend, index) =>
        <Friend 
        name={friend.name}
        image={friend.image}
        key={index} />
      )}
    </React.Fragment>
  );
}

export default FriendList;

