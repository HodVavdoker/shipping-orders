import React from 'react';
import classes from './BuildingPizza.module.css';

const buildingpizza = (props) =>{
    return(
        <div>
            <section>
                <header>
                    <h2>בחירת גודל</h2>       
                    <button>חזרה</button>            
                </header>
               <div>
                   <ul>
                   <li>
                   <img></img>
                       <h5></h5>
                       <p></p>
                       <button>
                           
                       </button>
                   </li>
                   <li>
                   <img></img>
                       <h5></h5>
                       <p></p>
                       <button></button>
                   </li>
                   <li>
                   <img></img>
                       <h5></h5>
                       <p></p>
                       <button></button>
                   </li>
                   </ul>
               </div>
            </section>
        </div>
    );
}

export default buildingpizza;