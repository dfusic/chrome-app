import React, {Component} from 'react';
import SingleMsg from './../Profile/Components/SingleMsg';

class Messages extends Component{
  state={
    messages: this.props.messages
  }

  render(){
    let xyz = (this.state.messages.map(msg=>{
      return <SingleMsg msg="test"/>
    }))
    return(
      {xyz}
    )
  }
}

export default Messages;