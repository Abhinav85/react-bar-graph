import React from 'react';
import './Bar.css';

const Bar = ({percent,color = 'yellow',value = 'Not Given',width}) => {
    console.log('width',width);

    return(
        <div className = 'bar' style = {{height : `${percent}%`, backgroundColor : `${color}`, width : `${width}px`}}>
            <div className = "placeholder">{`${value}  ${percent}   `}</div>
        </div>
       
    )
}

export default Bar;