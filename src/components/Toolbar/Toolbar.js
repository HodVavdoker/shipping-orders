import React  from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import {withRouter} from 'react-router-dom';
import Logo from '../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) =>{
    return(

            <header className={classes.Toolbar}>
                <DrawerToggle clicked = {props.drawerToggleClicked}/>
                <div className = {classes.Logo}>
                <Logo/>
                </div>
                <nav className = {classes.DesktopOnly}>
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