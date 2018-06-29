import React, {Component} from 'react';
import SingleMsg from './../Profile/Components/SingleMsg';
class Messages extends Component{
  state={
    messages: this.props.messages
  }
  componentDidMount(){
    console.log(this.state.messages);
  }
  render(){

    return(
      <SingleMsg 
      msg='Lorem ipsum'
      />
    )
  }
}

export default Messages;