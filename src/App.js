import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Bar from './Components/Bar';
import BarInfo from './Components/BarInfo';


// The Input is supposed to be an object graphData containing the following information
// 1. A key width, it can go from 0 -100
// 2. An array data - each object in the array i.e the datum needs to contain two keys
// A title and value. You can also provide placeholder (Extra information) as well as color.

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedDatum : {},
      graphData : props.graphData
    }
  }

  // The Bar are shown as the function of the percent of the net accumulated value of all the input.
   // This function renders the bars as well as the title below it.

  renderBars = () =>{
    let sumOfAllValues = this.state.graphData.data.reduce((acc,datum) => {
      return acc + datum.value
    },0);
  
    return(
      this.state.graphData.data.map((datum,i) => {
        let percent = (datum.value/sumOfAllValues)*100;
        return <Bar percent = {percent} 
                    key = {datum.title} 
                    color = {datum.color} 
                    value = {datum.value} 
                    width = {this.state.graphData.width} 
                    title = {datum.title} 
                    placeholderData = {datum.placeholderData} 
                    setDataIntoBarInfo = {this.setDataIntoBarInfo}
                    
                  />
      })
    )
  }

  // This function renders the Markers
  renderMarkers = () => {
    return(
      Array(10).fill(null).map((elem,i) =>(
        <div className = 'marker' style = {{top : `${i*10}%`}} key = {`marker+${i*10}`}>{`${90 - i*10}`}</div>
      ))
    )
  }

  // This function render the information into the bar-info div

  setDataIntoBarInfo = ({value,placeholderData,color}) => {
    this.setState({
      selectedDatum : {value,placeholderData,color}
    })
  }

  // This renders the bar-chart info
  renderBarInfo = () =>{
    if(this.state.selectedDatum === null){
    return (<div></div>);
    }else{
      return(<BarInfo placeholderData = {this.state.selectedDatum.placeholderData} value = {this.state.selectedDatum.value} color = {this.state.selectedDatum.color}/>)
    }
  }

  render() {
    return (
      <div className="graph-wrapper">
        <div className = 'graph'>
          <div className = 'graph-header'>
            <div className = 'bar-title'>
              React Bar Graph
            </div>
            <div className = 'graphInfo'>
              {this.renderBarInfo()}
            </div>
          </div>
          
          <div className = 'marker-container'>
              {this.renderMarkers()}  
          </div>
          
          <div className = 'bar-lines-container'>
            <div className = 'bar-div-container'>
              {this.renderBars()}
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  graphData : PropTypes.object
};

export default App;
