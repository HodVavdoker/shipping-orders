import React from 'react';
import classes from './NavigationItems.module.css';
import {NavLink} from 'react-router-dom';

const navigationItems =(props) =>
{
    return(
        <ul className = {classes.NavigationItems}>
            <li className = {classes.NavigationItem}>
                <NavLink 
                    to = {props.linkhome}
                    activeClassName = {classes.active}>
                   דף הבית  </NavLink> 
                   </li>
            <li className = {classes.NavigationItem}>
                <NavLink to = {props.linkdetailscustomer}
                         activeClassName = {classes.active}>פרטי הלקוח</NavLink>
            </li>
            
            <li className = {classes.NavigationItem}>
                <NavLink to = {props.linkorder}
                         activeClassName = {classes.active}>הזמנה</NavLink>
            </li>

            <li className = {classes.NavigationItem}>
                <NavLink to = {props.linkallorders}
                         activeClassName = {classes.active}>פירוט הזמנות</NavLink>
            </li>

            <li className = {classes.NavigationItem}>
                <NavLink to = {props.linkdelivery}
                         activeClassName = {classes.active}>שליחים</NavLink>
            </li>
        </ul>
    );
}

export default navigationItems;