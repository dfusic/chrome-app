import React, {Component} from 'react';
import SingleMsg from './../Profile/Components/SingleMsg';
import {Link} from 'react-router-dom';
import './Messages.css';
class Messages extends Component{
  render(){
    let messagesOutput = null;
      messagesOutput = this.props.messages.map((msg)=>{
        return  (<SingleMsg 
        msg={msg.message}
        key={msg.key}
        id={msg.key}
        removeMsg={this.props.removeMsg}
        changeMsg={this.props.changeMsg}
        />);
      })
    

    return(
      <div className="Messages">
      <Link to="/profile">Profile</Link>
      {messagesOutput}
      </div>
    )
  }
}

export default Messages;