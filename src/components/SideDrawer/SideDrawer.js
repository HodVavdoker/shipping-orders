import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import classes from './SideDrawer.module.css';
import Backdrop from '../../Backdrop/Backdrop';
const sideDrawer = (props) =>{ 

    let attachedClasses = [classes.SideDrawer , classes.Close];
    if(props.open)
    {
        attachedClasses = [classes.SideDrawer , classes.Open]
    }
       return(
           <Auxilary>
               <Backdrop show={props.open} clicked = {props.closed}/>
               <div className = {attachedClasses.join(' ')}>
               <div className = {classes.Logo}>
               <Logo/>
               </div>
                <nav>
                   <NavigationItems
                   linkhome={props.linkhome}
                   linkdetailscustomer= {props.linkdetailscustomer}
                   linkorder = {props.linkorder}
                   linkallorders = {props.linkallorders}
                   linkdelivery = {props.linkdelivery}/>
               </nav>
           </div>
           </Auxilary>
       );
}
export default sideDrawer;
