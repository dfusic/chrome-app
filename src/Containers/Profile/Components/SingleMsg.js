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
<<<<<<< HEAD
     <div className="SingleMessage-footer">
      <span className="SingleMessage-delete"onClick={event=>props.removeMsg(event, props.id)}>Delete</span>
      <span className="SingleMessage-edit">Edit message</span>
     </div>
=======
    <div className="SingleMessage-bottom">
      <span className="SingleMessage-delete"onClick={event=>props.removeMsg(event, props.id)}>Delete</span>
      <span className="SingleMessage-edit-para">Edit Message</span>
      </div>
>>>>>>> b1cbbe5930ee4315c4509843a8bd4d163cbab14a
    </div>
  );
}
export default SingleMsg;