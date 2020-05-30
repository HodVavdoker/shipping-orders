import React from 'react';
import classes from './Desserts.module.css';

const salads = (props) =>{
    return(
        <div>
            <section>
                <header className = {classes.header}> 
                    <h2>קינוחים</h2>       
                    <button className = {classes.btnback}
                            onClick ={props.goingback}></button>            
                </header>
               <div>
                   <ul style={{listStyleType : "none"}}>
                   <li className = {classes.li}>
                   
                    <h4>חלבי</h4> 
                       <button className = {classes.btn}>
                       מלבי
                       </button>
                       <button className = {classes.btn}>
                       עוגת גבינה
                       </button>
                       <button className = {classes.btn}>
                       סופלה שוקולד
                       </button>
                   </li>
                  <li className = {classes.li}>
                   <h4>פרווה</h4> 
                       <button className = {classes.btn}>
                       ריבת חלב
                       </button>
                       <button className = {classes.btn}>
                       קדאיף
                       </button>
                       <button className = {classes.btn}>
                       בוואריה
                       </button>
                   </li>
                   </ul>
               </div>
            </section>
        </div>
    );
}

export default salads;