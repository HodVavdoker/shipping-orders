import React from 'react';
import classes from './Drinks.module.css';

const salads = (props) =>{
    return(
        <div>
            <section>
                <header className = {classes.header}> 
                    <h2>שתייה מתוקה</h2>       
                    <button className = {classes.btnback}
                            onClick ={props.goingback}></button>            
                </header>
               <div>
                   <ul style={{listStyleType : "none"}}>
                   <li className = {classes.li}>
                   
                    <h4>ליטר וחצי</h4> 
                       <button className = {classes.btn}>
                       קוקה קולה
                       </button>
                       <button className = {classes.btn}>
                       קולה זירו 
                       </button>
                       <button className = {classes.btn}>
                       נסטי אפרסק 
                       </button>
                       <button className = {classes.btn}>
                       נסטי מנגו אננס 
                       </button>
                       <button className = {classes.btn}>
                       ספרייט  
                       </button>
                       <button className = {classes.btn}>
                       ספרייט זירו  
                       </button>
                       <button className = {classes.btn}>
                       פאנטה   
                       </button>
                   </li>
                  <li className = {classes.li}>
                   <h4>חצי ליטר</h4> 
                   <button className = {classes.btn}>
                       קוקה קולה
                       </button>
                       <button className = {classes.btn}>
                       קולה זירו 
                       </button>
                       <button className = {classes.btn}>
                       נסטי אפרסק 
                       </button>
                       <button className = {classes.btn}>
                       נסטי מנגו אננס 
                       </button>
                       <button className = {classes.btn}>
                       ספרייט  
                       </button>
                       <button className = {classes.btn}>
                       ספרייט זירו  
                       </button>
                       <button className = {classes.btn}>
                       פאנטה   
                       </button>
                   </li>
                   </ul>
               </div>
            </section>
        </div>
    );
}

export default salads;