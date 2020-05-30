import React from 'react';
import classes from './RegularPizza.module.css';
import BuildControls from '../BuildControls/BuildControls';
import styled from 'styled-components'

const buildingpizza = (props) =>{
    let buildControls = <BuildControls></BuildControls>;
    const Button = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
    margin:  3px;
    border: 1px solid black;
    color: black;
    `
    return(
        <div>
            <section>
                <header> 
                    <h2 className = {classes.h2}>בחירת פיצה</h2>       
                    <button className = {classes.btnback}
                            onClick = {props.goingback}></button>            
                </header>
               <div>
                   <ul style={{listStyleType : "none"}}>
                   <li className = {classes.li}>
                    <h4>מגש 1</h4> 
                       <Button className = {classes.btn} onClick={props.toggleextras}>XL</Button>
                       <Button className = {classes.btn} onClick={props.toggleextras}>L</Button>
                       <Button className = {classes.btn} onClick={props.toggleextras}>M</Button>
                       <Button className = {classes.btn} onClick={props.toggleextras}>S</Button>
                   </li>
                   <li className = {classes.li}>
                         <h4>2 מגשי</h4>
                         <Button className = {classes.btn} onClick={props.toggleextras}>XL</Button>
                         <Button className = {classes.btn} onClick={props.toggleextras}>L</Button>
                         <Button className = {classes.btn} onClick={props.toggleextras}>M</Button>
                   </li>
                   </ul>
                   <div style={{transition: "all 0.3s ease-out"}}>
                   {props.seetheextra? buildControls : null}
                   </div>
                   <button className = {classes.NextButton}>Next</button>
               </div>
            </section>
        </div>
    );
}

export default buildingpizza;