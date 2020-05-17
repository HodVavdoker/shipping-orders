import React, { Component } from 'react';
import classes from './HomePage.module.css';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Clock from '../Clock/Clock';
import Order from '../../components/Order/Order';

class HomePage extends Component{


    render(){
        return(
            <Auxilary>
                <form className = {classes.bgImgCenter}>
                    <Clock></Clock>
                <div className = {classes.Div}>
                <input placeholder = "הכנס מספר פלאפון" className= {classes.Input}/>
                </div>
                <button className= {classes.Button} >אישור</button>                
                </form>
                <ul className = {classes.ul}>
                    <li className = {classes.li}> <img   className = {classes.img} src = "pizza1.jpg"></img> 
                    </li>
                    <li className = {classes.li}><img  className = {classes.img} src = "pizza1.jpg"></img> 
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