import React from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import classes from "./Layout.module.css";
//import Toolbar from '../Toolbar/Toolbar';
const layout = (props) => (
  <Auxilary >
    <Toolbar/> 
    <main>{props.children}</main>
  </Auxilary>
);
export default layout;
