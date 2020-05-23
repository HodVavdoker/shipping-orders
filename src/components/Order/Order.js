import classes from './Order.module.css';
import React, { Component } from 'react';
import SpecialPizza from '../SpecialPizza/SpecialPizza';
import Pasta from '../Pasta/Pasta';
import Salads from '../Salads/Salads';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Modal from '../Modal/Modal';
import Desserts from '../Desserts/Desserts';
import Drinks from '../Drinks/Drinks';
import RegularPizza from '../RegularPizza/RegularPizza';
import styled from 'styled-components'

const Btn = styled.button`
border: none;
padding: 0;
background: none;
`
class Order extends Component{
    
    state = {
        openregularpizza : false,
        openpizza : false,
        openpasta : false,
        opensalads : false,
        opendesserts : false,
        opendrinks : false,
      };


      openpizza = () => {
            this.setState({ openpizza: !this.state.openpizza});
      }
      openregularpizza = () => {
        this.setState({ openregularpizza: !this.state.openregularpizza});
  }
      openpasta = () => {
            this.setState({ openpasta: !this.state.openpasta});
        }
      opensalads = () => {
            this.setState({ opensalads: !this.state.opensalads});
        }
      opendesserts = () => {
            this.setState({ opendesserts: !this.state.opendesserts});
        }
        opendrinks = () => {
            this.setState({ opendrinks: !this.state.opendrinks});
        }
    render(){
    return(
        <Auxilary>
            <Modal show={this.state.openpizza}>
                <SpecialPizza
                goingback = {this.openpizza}>
                </SpecialPizza>
            </Modal>
            <Modal show={this.state.openpasta}>
                <Pasta
                goingback = {this.openpasta}>
                </Pasta>
            </Modal>
            <Modal show={this.state.opensalads}>
                <Salads
                goingback = {this.opensalads}>
                </Salads>
            </Modal>
            <Modal show={this.state.opendesserts}>
                <Desserts
                goingback = {this.opendesserts}>
                </Desserts>
            </Modal>
            <Modal show={this.state.opendrinks}>
                <Drinks
                goingback = {this.opendrinks}>
                </Drinks>
            </Modal>
            <Modal show={this.state.openregularpizza}>
                <RegularPizza
                goingback = {this.openregularpizza}>
                </RegularPizza>
            </Modal>
        
        <div className = {classes.div}>
            <ul className = {classes.ul}>
            <li onClick = {this.openregularpizza}>
                   פיצות
                </li>
                <li  onClick = {this.openpizza}>
                   פיצות מיוחדות
                </li>
                <li className = {classes.li}
                    onClick = {this.openpasta}>
                    פסטות</li>
                <li className = {classes.li}
                    onClick = {this.opensalads}>
                       סלטים</li>
                <li className = {classes.li}
                    onClick = {this.opendesserts}>
                    קינוחים</li>
                <li className = {classes.li}
                    onClick = {this.opendrinks}>
                    שתייה מתוקה</li>
            </ul>
        </div>
        </Auxilary>
    );
}
}

export default Order;
