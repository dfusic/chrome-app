import React from 'react';
import ContentEditable from 'react-contenteditable';
const SingleMsg = props => {
  return (
    <div className="SingleMessage">
      <ContentEditable
      html={props.msg}
      disabled={false}
      onChange={(event, key) => props.changeMsg(event, props.id)}
      />
     <div className="SingleMessage-footer">
      <span className="SingleMessage-delete"onClick={event=>props.removeMsg(event, props.id)}>Delete</span>
      <span className="SingleMessage-edit">Edit message</span>
     </div>
    </div>
  );
}
export default SingleMsg;