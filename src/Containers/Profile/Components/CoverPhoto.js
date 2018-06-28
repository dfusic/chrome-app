import React from 'react';
import ReactFileReader from 'react-file-reader';
import editImg from '../../../images/edit.png';
const CoverPhoto = props => {
  let coverImageStyle = {
    background: 'url(' + props.coverImage + ') center center no-repeat',
    backgroundSize: 'cover',
    height: '150px',
    width: '100%',
    position: 'relative'
  };
  return (
    <div className="Profile-cover">
            <div style={coverImageStyle} className="cover-image">
              <div className="Profile-cover-input">
                <ReactFileReader handleFiles={props.handleProfileCover} fileTypes={[".png", ".jpg",".jpeg",".svg"]} base64={true}>
                  <button className="cover-btn"></button>
                </ReactFileReader>
                <img className="change-cover-img" src={editImg} alt="Change"/>
              </div>
            </div>
          </div>
  )
}

export default CoverPhoto;