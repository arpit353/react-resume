import React from 'react';
import SkillItem from './SkillItem';

const Skills = props => {
	const getSkillsDetails = () => {
        const skillItems = [];
        props.skillsData.details.forEach((val, index) => {
          skillItems.push(<SkillItem key={index} skillItemData={val}/>);
        })
        return skillItems;
    }

    const getSkills = props.skillsData.keywords.map(function(item, index) {
      return (<li key={index}><span className="label label-success">{item}</span></li>)
    });

  	return (
  	  <section className="skills">
        <h2 className="text-uppercase">Skills</h2>
        {getSkillsDetails()}
        <ul className="skills-list list-inline">{getSkills}</ul>
      </section>
  	)
};

export default Skills;
