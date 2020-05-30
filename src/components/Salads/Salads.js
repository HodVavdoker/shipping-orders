import React from 'react';
import classes from './Salads.module.css';

const salads = (props) =>{
    return(
        <div>
            <section>
                <header className = {classes.header}> 
                    <h2>סלטים</h2>       
                    <button className = {classes.btnback}
                            onClick ={props.goingback}></button>            
                </header>
               <div>
                   <ul style={{listStyleType : "none"}}>
                   <li className = {classes.li}>
                   
                    <h4> סלט יווני </h4> 
                       <button className = {classes.btn}>
                       אישי
                       </button>
                       <button className = {classes.btn}>
                       זוגי
                       </button>
                       <button className = {classes.btn}>
                       משפחתי
                       </button>
                   </li>
                  <li className = {classes.li}>
                   <h4> סלט טונה </h4> 
                       <button className = {classes.btn}>
                       אישי
                       </button>
                       <button className = {classes.btn}>
                       זוגי
                       </button>
                       <button className = {classes.btn}>
                       משפחתי
                       </button>
                   </li>
                   <li className = {classes.li}>
                  
                       <h4>סלט ים תיכוני </h4>
                       <button className = {classes.btn}>
                       אישי
                       </button>
                       <button className = {classes.btn}>
                       זוגי
                       </button>
                       <button className = {classes.btn}>
                       משפחתי
                       </button>
                
                   </li>
                   </ul>
               </div>
            </section>
        </div>
    );
}

export default salads;