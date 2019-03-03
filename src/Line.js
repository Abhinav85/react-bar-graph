import React from 'react';
import './Line.css';

const Line = ({top}) => {
    return(
        <div className = 'line' style = {{top : `${1 - top}%`}}></div>
    )
}


export default Line;