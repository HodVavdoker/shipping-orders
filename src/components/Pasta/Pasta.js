import React from 'react';
import classes from './Pasta.module.css';

const pasta = (props) =>{
    return(
        <div>
            <section>
                <header className = {classes.header}> 
                    <h2>בחירת פיצה</h2>       
                    <button className = {classes.btnback}></button>            
                </header>
               <div>
                   <ul style={{listStyleType : "none"}}>
                   <li className = {classes.li}>
                   
                    <h4>פיצה אלפרדו</h4> 
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
                  
                       <h4>פיצה מיוחדת</h4>
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
                 
                       <h4>פיצה שום</h4>
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
                   </ul>
               </div>
            </section>
        </div>
    );
}

export default pasta;