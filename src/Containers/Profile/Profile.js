import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SingleMsg from './Components/SingleMsg';
import CoverPhoto from './Components/CoverPhoto';
import ProfilePhoto from './Components/ProfilePhoto';
import './Profile.css';
// import default cover image and profile image
import coverImage from '../../images/cover-image.jpg';
import profileImage from '../../images/profile-image.jpg';
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
    ],
    coverImage: coverImage,
    profileImage: profileImage
  }

  handleSingleMessage = event => {
    let currentMessage = event.target.value;
    let remainingMessageLength = 500 - event.target.value.length;
    this.setState({
      currentMessage: currentMessage,
      remainingLength: remainingMessageLength
    })
  }

  handleNewMessage = event => {
    event.preventDefault();
    console.log('Submited');
    // copy state
    let newMsgState = this.state.messages;
    // get current message
    let currentMessage = this.state.currentMessage;
    // generate unique key for each message
    // transform message to lower case and append profile object length to it / should be unique enough
    let currentMessageKey = currentMessage.toLowerCase() + newMsgState.length;
    this.setState({
      messages: [
        ...newMsgState,
        {
          'key': currentMessageKey,
          'message': currentMessage
        },
      ],
      remainingLength: 500,
      currentMessage: ''
    });
  }
  // profile cover photo

  handleProfileCover = files => {
    let coverImg = files.base64;
    this.setState({
      coverImage: coverImg
    });
  }
  handleProfileImage = files => {
    let profileImg = files.base64;
    this.setState({
      profileImage: profileImg
    });
  }
  render(){
    let messageSubmit = (<input type="submit" value="Submit" />);
    // disable submit button if message is longer than 500 characters
    if(this.state.remainingLength <= 0){
      messageSubmit = (<input type="submit" value="Submit" disabled />);
    }
    // loop through messages and show them
    let messages = null;
    messages = this.state.messages.slice(0,5).map((msg)=>{
       return  (
        <SingleMsg 
        msg={msg.message}
        key={msg.key}
        />
      );
    })
    // more messages link
    let moreMessages = null;
    if(this.state.messages.length > 5){
      moreMessages = (<Link to="/messages">All Messages</Link>);
    }
    return(
      <section className="Profile">
        <div className="Profile-header">
          <CoverPhoto 
          coverImage={this.state.coverImage}
          handleProfileCover={this.handleProfileCover}
          />
          <ProfilePhoto 
          profileImage={this.state.profileImage}
          handleProfileImage={this.handleProfileImage}
          />
        </div>
        <section className="Profile-data">
        <div className="Profile-user-info">
        <h2 className="Profile-name">{this.state.currentUser.name}</h2>
        <p className="Profile-mail">{this.state.currentUser.mail}</p>
        </div>
        <div className="Profile-new-msg">
        <form className="Profile-new-msg-form" onSubmit={(event)=>this.handleNewMessage(event)}>
          <textarea type="text" placeholder="Your Message" value={this.state.currentMessage} className="Profile-msg-input"onChange={(event)=>this.handleSingleMessage(event)} required/>
          <div className="submit-parent">
            {messageSubmit}
            <p className="Profile-message-remaining-length">Characters left: {this.state.remainingLength}</p>
          </div>
        </form>
        
        </div>
        <div className="Profile-messages">
        {messages}
        </div>
        {moreMessages}
        </section>
      </section>
    );
  }
}

export default Profile;