import classes from './Order.module.css';
import React, { Component } from 'react';
import BuildingPizza from '../BuildingPizza/BuildingPizza';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Modal from '../Modal/Modal';

class Order extends Component{
    
    state = {
            edited : false,
      };


      openbu = () => {
            this.setState({ edited: true});
      }

    render(){
    return(
        <Auxilary>
            <Modal show={this.state.edited}>
                <BuildingPizza>
                </BuildingPizza>
            </Modal>
        
        <div className = {classes.div}>
            <ul className = {classes.ul}>
                <li>
                   <button onClick = {this.openbu}>פיצות מיוחדות</button>
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
        </div>
        </Auxilary>
    );
}
}

export default Order;
