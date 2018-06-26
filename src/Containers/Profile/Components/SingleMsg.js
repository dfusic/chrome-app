import React from 'react';

const SingleMsg = props => {
  return (
    <div className="SingleMessage">
      <p>{props.msg}</p>
    </div>
  );
}
export default SingleMsg;