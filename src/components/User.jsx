import React from 'react';

const User = (props) => {
  return (
    <div>
      <img src={props.image} alt={`${props.firstName} ${props.lastName}`} />
      <p>{props.firstName} {props.lastName}</p>
    </div>
  );
};

export default User;
