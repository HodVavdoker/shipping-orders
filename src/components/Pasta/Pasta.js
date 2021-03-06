import React from 'react';
import classes from './Pasta.module.css';

const pasta = (props) =>{
    return(
        <div>
            <section>
                <header className = {classes.header}> 
                    <h2>פסטות</h2>       
                    <button className = {classes.btnback}
                            onClick ={props.goingback}></button>            
                </header>
               <div>
                   <ul style={{listStyleType : "none"}}>
                   <li className = {classes.li}>
                   
                    <h4> פנה </h4> 
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
                   <h4> ספגטי </h4> 
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
                  
                       <h4>רביולי </h4>
                       <button className = {classes.btn}>
                       גבינה
                       </button>
                       <button className = {classes.btn}>
                       בטטה
                       </button>
                
                   </li>
                   </ul>
               </div>
            </section>
        </div>
    );
}

export default pasta;