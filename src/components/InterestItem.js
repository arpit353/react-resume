import React from 'react';

const InterestItem = props => {
    return (
        <li className="interestItem col-lg-3">
          {props.interestItemData.name}
        </li>
    )
};

export default InterestItem;
