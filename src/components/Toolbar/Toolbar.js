import React  from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import {withRouter} from 'react-router-dom';


const toolbar = (props) =>{
    return(

            <header className={classes.Toolbar}>
                <nav>
                    <NavigationItems linkhome={props.linkhome}
                                     linkdetailscustomer= {props.linkdetailscustomer}
                                     linkorder = {props.linkorder}
                                     linkallorders = {props.linkallorders}
                                     linkdelivery = {props.linkdelivery}/>
                </nav>
            </header>
    );  
}

export default withRouter(toolbar);