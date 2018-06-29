import React from 'react';

const SingleMsg = props => {
  return (
    <div className="SingleMessage">
      <textarea  value={props.msg} onChange={(event)=>props.handleMsgChange(event, props.id)}></textarea>
      <span className="SingleMessage-delete"onClick={event=>props.removeMsg(event, props.id)}>Delete</span>
    </div>
  );
}
export default SingleMsg;