import React from 'react';
// import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		// const startdate = moment(item.startDate).format('MMM, YYYY');
  		// const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>            
            <h3><strong>{item.type} [{item.endYear}] </strong> - {item.area}</h3>            
  				  <h4>{item.institution}</h4>
  				  <p>{item.summary}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase">Education</h2>
        {getEducation}
      </section>
  	)
};

export default Education;
