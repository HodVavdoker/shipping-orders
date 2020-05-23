import React from 'react';
import classes from './RegularPizza.module.css';
import BuildControls from '../BuildControls/BuildControls';

const buildingpizza = (props) =>{


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
                       <button className = {classes.btn}>
                       XL
                       </button>
                       <button className = {classes.btn}>
                       L
                       </button>
                       <button className = {classes.btn}>
                       M
                       </button>
                       <button className = {classes.btn}>
                       S
                       </button>

                   </li>
                   <li className = {classes.li}>
                  
                       <h4>2 מגשי</h4>
                       
                         <button className = {classes.btn}>
                         XL
                         </button>
                        

                       <button className = {classes.btn}>
                       L
                       </button>
                     
                       <button className = {classes.btn}>
                       M
                       </button>
                   </li>
                   </ul>
                   <button className = {classes.NextButton}>Next</button>
                   <BuildControls></BuildControls>
               </div>
            </section>
        </div>
    );
}

export default buildingpizza;