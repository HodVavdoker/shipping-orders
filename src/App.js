import React,{ Component } from 'react';
import './App.module.css';
import HomePage from './containers/HomePage/HomePage';
import Clock from './containers/Clock/Clock';
import classes from './App.module.css';
class App extends Component
{
  render(){
    return (
      <div>
       <HomePage></HomePage>
      </div>
    );
  }
}
  

export default App;
