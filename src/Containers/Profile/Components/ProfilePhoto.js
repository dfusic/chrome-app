import React from 'react';
import ReactFileReader from 'react-file-reader';
import editImg from '../../../images/edit.png';
const ProfilePhoto = props => {
  let profileImageStyle = {
    background: 'url(' + props.profileImage + ') center center no-repeat',
    backgroundSize: 'cover',
    height: '100px',
    width: '100px',
    position: 'relative'
  };
  return(
    <div className="Profile-image">
            <div style={profileImageStyle} className="user-image">
              <div className="Profile-image-input">
                <ReactFileReader handleFiles={props.handleProfileImage} fileTypes={[".png", ".jpg",".jpeg",".svg"]} base64={true} children={true}>
                  <button className="profile-btn"></button>
                </ReactFileReader>
                <img src={editImg} className="profile-btn-img"alt="Change"/>
              </div>
            </div>
          </div>
  );
}
export default ProfilePhoto;