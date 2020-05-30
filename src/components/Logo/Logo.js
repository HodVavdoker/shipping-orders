
import React from 'react';
import PizzaLogo from '../../assets/images/pizzatrans.png';
import classes from './Logo.module.css';
const logo = (props) =>(

    <div className = {classes.Logo} style ={{height : props.height}}>
        <img src = {PizzaLogo} alt = "MyPizza"></img>
    </div>

);

export default logo;
