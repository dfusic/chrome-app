import React, {Component} from 'react';
import SingleMsg from './../Profile/Components/SingleMsg';

class Messages extends Component{
  state={
    messages: [
      ...this.props.messages
    ]
  }
  componentDidMount(){
   
  }
  render(){
    return(
      <h1>messages</h1>
    )
  }
}

export default Messages;