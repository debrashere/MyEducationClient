import React from 'react';
export const convertNumberToStars = (rating) => {  
    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];

    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
    output.push(<i className="fa fa-star star-style" aria-hidden="true" key={i}></i> );

    // If there is a half a star, append it
    if (i === .5) output.push(<i className="fa fa-star-half-o star-style" aria-hidden="true" key={i}></i> );

    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
    output.push(<i className="fa fa-star-o star-style" aria-hidden="true"  key={i*6}></i> );
    return  output
};
