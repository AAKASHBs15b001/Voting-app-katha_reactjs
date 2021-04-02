import React, { Component } from 'react';
import Countdown from 'react-countdown';
class TimeComponent extends React.Component {
    constructor() {
       super();
       this.state = {
         curTime : null
       }
     }
     componentDidMount() {
       setInterval( () => {
         this.setState({
           curTime : new Date().toLocaleString()
         })
       },1000)
     }
    render() {
         return(
            <Countdown
    date={Date.now() + 10000}
    intervalDelay={0}
    precision={3}
    renderer={props => <div>{props.total}</div>}
  />
         );
       }
     }

export default TimeComponent;