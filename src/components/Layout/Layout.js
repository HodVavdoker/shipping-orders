import React from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import Toolbar from '../Toolbar/Toolbar';
const layout = (props) => (
  <Auxilary >
    <Toolbar linkhome = "/homepage"
             linkdetailscustomer = "/detailscustomer"
             linkorder= "/order"
             linkallorders = "/allorders"
             linkdelivery = "/delivery"/> 
    <main>{props.children}</main>
  </Auxilary>
);
export default layout;
