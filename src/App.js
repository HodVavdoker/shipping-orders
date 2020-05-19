import React,{ Component } from 'react';
import './App.module.css';
import HomePage from './containers/HomePage/HomePage';
import Clock from './containers/Clock/Clock'
import {Route , Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Order from './components/Order/Order';

class App extends Component
{
  render(){
    return (
      <div>
        <Layout>
          <Switch>
            <Route path = "/homepage"  component= {HomePage}/>
            <Route path = "/detailscustomer"  component= {Clock}/>
            <Route path = "/order"  component= {Order}/>
            <Route path = "/allorders"  component= {Clock}/>
            <Route path = "/delivery"  component= {HomePage}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}
  

export default App;
