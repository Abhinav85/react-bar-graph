import  React from 'react';
import './BarText.css'

const BarText = ({data,width}) =>{
    return(
        <div className = 'bar-text'>
            {data.map((datum,i) => (
                <div className = 'text' key = {`${i} + ${datum.title}`} style = {{width : `${width}px`}}>
                    {datum.title}
                </div>
            ))}
        </div>
    )
}

export default BarText;