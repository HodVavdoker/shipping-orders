import React, { Component } from 'react';
import classes from './Clock.module.css';
import Auxilary from '../../hoc/Auxilary/Auxilary';
class Clock extends Component{

    state = {
        clock:{time:" ",date:" "},
        week : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    };
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      
    updateTime = () => {
        
        var cd = new Date();
        this.state.clock.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        this.state.clock.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.state.week[cd.getDay()];
    };
    tick =() => {
        this.setState({
          time: new Date().toLocaleString()
        })
    };
    zeroPadding = (num, digit) => {
        var zero = '';
        for(var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    }
    render(){
        return(
            <Auxilary>
                {this.updateTime()}
                <div className = {classes.Clock}>
                    <p className = {classes.Date}>{this.state.clock.date}</p>
                    <p className = {classes.Time}>{this.state.clock.time}</p>
                </div>
            </Auxilary>
        );
    }
}

export default Clock;