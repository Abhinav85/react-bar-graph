import React from 'react';
import './Bar.css';

const Bar = ({percent,color = 'yellow',value = 'Not Given',width = 70,title = 'No Title',placeholderData = 'No data provided',setDataIntoBarInfo}) => {

    return(
        <div className = 'bar-complete'>
            <div 
                className = 'bar' 
                style = 
                {{
                    height : `${percent}%`, 
                    backgroundColor : `${color}`, 
                    width : `${width}%`
                }}

                onClick = {() => setDataIntoBarInfo({value,placeholderData,color})}
                >
                <span className = "percent-data">
                    <div> Percent -{percent.toFixed(2)}%</div>
                </span>
            </div>
            <div className = 'bar-text'>
                {`${title}  (${value})`}
            </div>
        </div>
        
       
    )
}

export default Bar;