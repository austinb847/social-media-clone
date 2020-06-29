import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <h3>{props.userName}</h3>
      <p>{props.status}</p>
      <img src="{props.image}"/>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Post;