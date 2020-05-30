import React, { Component } from 'react';
import Auxilary from "../../hoc/Auxilary/Auxilary";
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
class Layout extends Component {
  state = {
      showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
      this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
      this.setState( ( prevState ) => {
          return { showSideDrawer: !prevState.showSideDrawer };
      } );
  }
  render () {

    return (
  <Auxilary >
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}
             linkhome = "/homepage"
             linkdetailscustomer = "/detailscustomer"
             linkorder= "/order"
             linkallorders = "/allorders"
             linkdelivery = "/delivery"/> 
    <SideDrawer
              open={this.state.showSideDrawer}
              closed={this.sideDrawerClosedHandler}
              linkhome = "/homepage"
              linkdetailscustomer = "/detailscustomer"
              linkorder= "/order"
              linkallorders = "/allorders"
               linkdelivery = "/delivery"/>
    <main>{this.props.children}</main>
  </Auxilary>
    )
  }
}
export default Layout;
