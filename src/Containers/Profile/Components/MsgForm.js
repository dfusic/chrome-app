import React from 'react';

const MsgForm = props => {
  let messageSubmit = <input type="submit" value="Submit" />;
    // disable submit button if message is longer than 500 characters
    if (props.remainingLength <= 0) {
      messageSubmit = <input type="submit" value="Submit" disabled />;
    }
  return (
    <div className="Profile-new-msg">
            <form
              className="Profile-new-msg-form"
              onSubmit={props.handleNewMessage}
            >
              <textarea
                type="text"
                placeholder="Your Message"
                
                className="Profile-msg-input"
                onChange={props.handleSingleMsg}
                required
              />
              <div className="submit-parent">
                {messageSubmit}
                <p className="Profile-message-remaining-length">
                  Characters left: {props.remainingLength}
                </p>
              </div>
            </form>
          </div>
  );
}
export default MsgForm;