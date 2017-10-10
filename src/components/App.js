import React, { PropTypes } from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Interest from './Interest';

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  const interestData = props.jsonObj.interests;
  
  return (
          <div className="container main">            
              <div className="col-md-12">
                  <Profile profileData={profileData} />
                  <div className="row userDetails">
                      <About aboutData={aboutData} />
                      <Work workData={workData} />
                      <Skills skillsData={skillsData} />
                      <Education educationData={educationData} />
                      <Interest interestData={interestData} />
                  </div>
              </div>              
          </div>
    )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
