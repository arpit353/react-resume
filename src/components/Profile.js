import React from 'react';

const Profile = props => {
    const profileObj = props.profileData;
    return  <div className="row userMeta">
                  <div className="profileImg thumbnail">
                      <img role="presentation" className="profileImg" src={profileObj.picture} width="200" alt={profileObj.name} />
                  </div>
                  <div className="profileMeta">
                      <h1 className="text-right">{profileObj.name}</h1>
                      <h3 className="text-right">{profileObj.label}</h3>
                      <ul className="list-unstyled contact-links text-right">
                        <li>{profileObj.location.city}, {profileObj.location.state}, {profileObj.location.country}</li>
                        <li><a href={profileObj.github_url} target="_blank">{profileObj.github_url}</a></li>
                        <li><a href={`mailto:${profileObj.email}`}>{profileObj.email}</a></li>
                        <li>{profileObj.mobile}</li>                        
                      </ul>
                  </div>                
            </div>
};

export default Profile;
