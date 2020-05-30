import React from 'react';
import classes from './BuildControl.module.css';
const buildControl = (props) =>{
return(
    <div        className = {classes.BuildControl}>
        <div    className = {classes.Label}>{props.label}</div>
        <button className=  {classes.Right}  ></button>
        <button className = {classes.Left}></button>
        <button className = {classes.Full} ></button>
    </div>
);
}
export default buildControl;