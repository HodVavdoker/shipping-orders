import React, { Component } from 'react';
import classes from './HomePage.module.css';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Clock from '../Clock/Clock';
import axios from '../../axios-orders';
import { Redirect } from 'react-router-dom';

class HomePage extends Component{

    
    state = {
        phonenumber : "",
        numbers : [],
  };

    // validateUser = (number)=> {
    // return axios.get('https://pizza-1661e.firebaseio.com/numbers.json' + response.data.id + number)
    //             .then(response =>{
    //                const myob =  Object.keys(response.data); 
    //                console.log("myob = " +myob );    
    //                })



    // validateUser = (number)=> {
    //                 let newnum = [];
    //                return axios.get('https://pizza-1661e.firebaseio.com/numbers.json')
    //                .then(response =>{
    //                       axios.get('https://pizza-1661e.firebaseio.com/numbers/' + "M7hsqaAoHuJC8zlMWn_" + ".json")
    //                       .then(response =>{
    //                           newnum.push(response);
    //                           console.log(newnum);
    //                       })
    //                   });
    //                   }
  componentWillMount(){
    axios.get('https://pizza-1661e.firebaseio.com/numbers.json')
    .then(response =>{
        console.log(response.data);
        this.setState({numbers : response.data});

    })
    console.log( "numbers" +this.state.numbers);
  }
    EditPhoneNumber = (event) =>{
        console.log(this.state.phonenumber);
        this.setState({phonenumber : event.target.value});
    }
    NumberExist = () =>{


      

        
        const num ={
            number : this.state.phonenumber,
        } 
        axios.post('/numbers.json' , num)
        .then(response => console.log(response))
        .catch(error => console.log(console.error));

        this.props.history.replace('/detailscustomer');
    }

    render(){
        return(
            <Auxilary>
                <form className = {classes.bgImgCenter}>
                    <Clock></Clock>
                <div className = {classes.Div}>
                <input className= {classes.Input}
                        placeholder = "הכנס מספר פלאפון" 
                        onChange = {(event)=>this.EditPhoneNumber(event)}/>
                </div>

                </form>
                <button className= {classes.Button}
                        type = "submit"
                        onClick = {this.NumberExist} >אישור</button>     
    
                <ul className = {classes.ul}>
                    <li className = {classes.li}> <img   className = {classes.img} src = "pizza1.jpg"></img> 
                    </li>
                    <li className = {classes.li}><img  className = {classes.img} src = "pizza1.jpg"></img> 
                    </li>
                    <li className = {classes.li}><img   className = {classes.img} src = "pizza1.jpg"></img> 
                    </li>
                    <li className = {classes.li}><img   className = {classes.img} src = "pizza1.jpg"></img> 
                    </li>
                </ul>
            </Auxilary>
        );
    }
}

export default HomePage;