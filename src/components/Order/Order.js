import classes from './Order.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const order = (props) =>{
    return(

        <div className = {classes.div}>
            <ul className = {classes.ul}>


                <li>
                    <NavLink
                        to = {props.startbuilding}
                    >Pizza</NavLink>
                </li>








                <li className = {classes.li}>
                    <a className = {classes.a}>
                    <span style = {{backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"}}></span>  
                        <span className = {classes.span}>
                            פיצות
                        </span>
                    </a>
                </li>

                <li className = {classes.li}>
                    <a className = {classes.a}>
                        <span>
                            img
                        </span>    
                        <span className = {classes.span}>
                            פסטות
                        </span>
                    </a>
                </li>

                <li className = {classes.li}>
                    <a className = {classes.a}>
                        <span >
                            img
                        </span>    
                        <span className = {classes.span}>
                            סלטים
                        </span>
                    </a>
                </li>

                <li className = {classes.li}>
                    <a className = {classes.a}>
                        <span>
                            img
                        </span>    
                        <span className = {classes.span}>
                            קינוחים
                        </span>
                    </a>
                </li>

                <li className = {classes.li}>
                    <a className = {classes.a}>
                        <span>
                            img
                        </span>    
                        <span className = {classes.span}>
                            שתייה
                        </span>
                    </a>
                </li>
            </ul>

            <span style = {{backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}></span>
        </div>
    );
}

export default order;
