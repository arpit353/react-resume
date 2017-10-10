import React from 'react';
import InterestItem from './InterestItem';

const Interest = props => {
    const getInterest = () => {
        const interestItems = [];
        props.interestData.forEach((val, index) => {
          interestItems.push(<InterestItem key={index} interestItemData={val}/>);   
        })
        return interestItems;
    }

    return (
      <section className="interest">
        <h2 className="text-uppercase">Interest</h2>
        <ul className="container-fluid insterest-list">{getInterest()}</ul>
      </section>
    );
};

export default Interest;