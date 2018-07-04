import React, { Component } from 'react';
import ProfileIndex from '../profile/ProfileIndex';


const Splash = (props) => {
  return (
      <div>
          <ProfileIndex token={props.sessionToken}/>
      </div>
  ) 
}

export default Splash;