import React, { Component } from 'react';
import classes from './HomePage.module.css';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Clock from '../Clock/Clock';

class HomePage extends Component{


    render(){
        return(
            <Auxilary>
                <form className = {classes.bgImgCenter}>
                    <Clock></Clock>
                <div className = {classes.Div}>
                <input className= {classes.Input}/>
                <label>Enter a phone number</label>
                </div>
                <button className= {classes.Button} >Enter</button>                
                </form>
                <ul className = {classes.ul}>
                    <li className = {classes.li}> <img   className = {classes.img} src = "pizza1.jpg"></img> 
                    </li>
                    <li className = {classes.li}><img  className = {classes.img} src = "pizza.jpg"></img> 
                    </li>
                    <li className = {classes.li}><img   className = {classes.img} src = "pizza1.jpg"></img> 
                    </li>
                    <li className = {classes.li}><img   className = {classes.img} src = "pizza1.jpg"></img> 
                    </li>
                </ul>
            </Auxilary>
        );
    }
}

export default HomePage;