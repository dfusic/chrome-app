import React, {Component} from 'react';
import SingleMsg from './Components/SingleMsg';
class Profile extends Component{
  state={
    currentUser: {...this.props.user},
    currentMessage: '',
    remainingLength: 500,
    messages: [
      {
        key: 'isnfgoisdfg',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, error!'
      },
      {
        key: 'dfjdhgjdgj',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ad ut! Natus iusto eius temporibus quasi cum, iste architecto unde.'
      },
      {
        key: 'fghgfhdefghdfh',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aut ullam? Alias, ducimus fugiat? Aliquid illo ipsa quaerat mollitia quis quas quia consequuntur, voluptas assumenda.'
      },
    ]
  }

  handleMessage = event => {
    let currentMessage = event.target.value;
    let remainingMessageLength = 500 - event.target.value.length;
    this.setState({
      currentMessage: currentMessage,
      remainingLength: remainingMessageLength
    })
  }

  render(){
    let messageSubmit = (<input type="submit" value="Submit" />);
    // disable submit button if message is longer than 500 characters
    if(this.state.remainingLength <= 0){
      messageSubmit = (<input type="submit" value="Submit" disabled />);
    }
    // loop through messages and show them
    let messages = null;
    messages = this.state.messages.map((msg)=>{
       return  (
        <SingleMsg 
        msg={msg.message}
        key={msg.key}
        />
      );
    })
    return(
      <section className="Profile">
        <div className="Profile-header">
          <div className="Profile-cover"></div>
          <div className="Profile-image"></div>
        </div>
        <div className="Profile-user-info">
        <h2 className="Profile-name">{this.state.currentUser.name}</h2>
        <p className="Profile-mail">{this.state.currentUser.mail}</p>
        </div>
        <div className="Profile-new-msg">
        <input type="text" placeholder="Your Message" onChange={(event)=>this.handleMessage(event)} />
        {messageSubmit}
        <p className="Profile-message-remaining-length">{this.state.remainingLength}</p>
        </div>
        <div className="Profile-messages">
        {messages}
        </div>
      </section>
    );
  }
}

export default Profile;