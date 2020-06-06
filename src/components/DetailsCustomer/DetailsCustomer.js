import React from 'react';
import classes from './DetailsCustomer.module.css';

const detailsCustomer =(props) =>{
  return (
    <div className = {classes.center}> 
      <table className = {classes.table}>
        <tr className = {classes.tr}>
          <td  className = {classes.td}>שם פרטי :</td>
          <td ><input  placeholder= "הוסף שם פרטי"></input></td>

          <td className = {classes.td}>שם משפחה : </td> 
          <td ><input  placeholder= "הוסף שם משפחה"></input></td>

          <td className = {classes.td}>עיר :</td>
          <td >
              <select>
                <option value="Null">בחר עיר</option>
                <option value="Ramle">רמלה</option>
                <option value="Rishon Letzion">ראשון לציון</option>
                <option value="Rehovot">רחובות</option> 
              </select></td>
        </tr>
        <tr>
          <td className = {classes.td}>רחוב :</td>
          <td ><input  placeholder= " הכנס רחוב"></input></td>
          <td className = {classes.td}>מספר רחוב</td>
          <td><input placeholder= " הכנס מספר רחוב"></input></td>
          <td className = {classes.td}>דירה :</td>
          <td ><input  placeholder= "הכנס דירה"></input></td>
        </tr>
        <tr>
        <td className = {classes.td}>כניסה</td>
        <td ><input  placeholder= "כניסה"></input></td>
        <td><button className = {classes.button}>המשך</button></td>
        <td><button className = {classes.button}> ערוך</button></td>
        <td><button className = {classes.button}>  ביטול</button></td>
        </tr>
      </table>
    </div>
  );
}
export default detailsCustomer;