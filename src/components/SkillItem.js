import React from 'react';

const SkillItem = props => {        
    return (
        <div className="skillItem">
          <h3><strong>{props.skillItemData.title}</strong></h3>
          <p>{props.skillItemData.summary}</p>
        </div>
    )
};

export default SkillItem;
