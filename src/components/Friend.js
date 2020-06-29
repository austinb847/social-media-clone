import React from 'react';
import PropTypes from 'prop-types';

function Friend(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <img src={props.image}/>
      <button>Add Friend</button>
      <hr/>
    </React.Fragment>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Friend;