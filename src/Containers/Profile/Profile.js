import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SingleMsg from './Components/SingleMsg';
import CoverPhoto from './Components/CoverPhoto';
import ProfilePhoto from './Components/ProfilePhoto';
import MsgForm from './Components/MsgForm';
import './Profile.css';
// import default cover image and profile image
import coverImage from '../../images/cover-image.jpg';
import profileImage from '../../images/profile-image.jpg';
class Profile extends Component{
  state={
    currentUser: {...this.props.user},
    currentMessage: '',
    remainingLength: 500,
    coverImage: coverImage,
    profileImage: profileImage,
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
    // loop through messages and show them
    let messages = null;
    messages = this.props.messages.slice(0,5).map((msg)=>{
       return  (
        <SingleMsg 
        msg={msg.message}
        key={msg.key}
        id={msg.key}
        removeMsg={this.props.removeMsg}
        changeMsg={this.props.changeMsg}
        />
      );
    })
    // more messages link
    let moreMessages = null;
    if(this.props.messages.length > 4){
      moreMessages = (<Link to="/messages">All Messages	&rarr;</Link>);
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
        <MsgForm 
        handleNewMessage={this.props.handleNewMessage}
        handleSingleMsg={this.props.handleSingleMessage}
        remainingLength={this.props.remainingLength}
        currentMessage={this.props.currentMessage}
        />
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