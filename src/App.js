import React, { Component } from 'react';
import './App.css';
import Line from './Line';
import BarText from './BarText';
import Bar from './Bar';

const graphData = {
  height : 20,
  width : 90,
  data : [
    {
      title : 'Title 1',
      value : 23,
      color : 'orange'
    },
    {
      title : 'Title 2',
      value : 12,
      color : 'blue'
    },
    {
      title : 'Title 3',
      value : 45,
      color : 'grey'
    },
    {
      title : 'Title 4',
      value : 67
    },
    {
      title : 'Title 5',
      value : 1
    },
    {
      title : 'Title 6',
      value : 100
    },
  ],
  yAxisLabel : [
    10.20,30
  ],

}

class App extends Component {


  renderLines = () => {
    return Array(30).fill(null).map((el,i) =>(
      <Line top = {i*10} key = {i}/>
    ))
  }

  renderBars = (data) =>{
    let sumOfAllValues = data.reduce((acc,datum) => {
      return acc + datum.value
    },0);
  
    return(
      graphData.data.map((datum,i) => {
        let percent = (datum.value/sumOfAllValues)*100;
        return <Bar percent = {percent} key = {datum.title} color = {datum.color} value = {datum.value} width = {graphData.width}/>
      })
    )
  }

  renderMarkers = () => {
    if(graphData.yAxisLabel)
    return(
      Array(graphData.data.length).fill(null).map((elem,i) =>(
        <div className = 'marker' style = {{top : `${100 - i*10}%`}} key = {`marker+${i*10}`}>{`${i*10}`}</div>
      ))
    )
  }
  render() {
    return (
      <div className="graph-wrapper">
        <div className = 'graph'>
        <div className = 'marker-container'>
              {this.renderMarkers()}  
            </div>
          <div className = 'bar-lines-container'>
            {/* {this.renderLines()} */}
            <div className = 'bar-div-container'>
              {this.renderBars(graphData.data)}
            </div>
           
            
          </div>
          <BarText data = {graphData.data} width = {graphData.width} />
        </div>
      </div>
    );
  }
}

export default App;
