import React from 'react';
import './BarInfo.css';

const BarInfo = ({value,placeholderData,color}) => {
    return(
        <div>
            <div> Value - {value}</div>
            <div> Extra Info - {placeholderData}</div>
            <div className = 'bar-info-color'>Color -  <div style = {{width : '20px', height : '20px', backgroundColor : `${color}`}}></div></div>
        </div>
    )
}

export default BarInfo;