import React,{useState} from 'react';
import './css/Headwel.css';
import logo  from './image/applogo.jpg';
import logoq  from './image/logo.png';
import pho from './image/avatar.jpg';
import { Button } from 'react-bootstrap';
function Appa() {
  const[ver,setver]=useState(false);
  const fun=()=>{
    if(ver){
    return(<div className="dropdown-content">
    <button className="btn btn-primary">PROFILE</button>
    <button className="btn btn-warning">CART</button>
    <button className="btn btn-success">ORDERS</button>
    <button className="btn btn-danger">LOGOUT</button>
 </div>)}
  }
  return (
    <div className="myhead">
     <div className="dropdown">
     <img src={logo}alt="LOGO OF AAU" width="100%" height="100%"/>
          </div>
       <div className="h2" color="blue">WELLCOME TO MYSITE </div>
     <div className="dropdown">
     <button onClick={()=>setver(prevState=>!prevState)} style={{width:"100%",height:"100%"}} className=""><img src={pho}alt="LOGO OF AAU" width="100%" height="100%" /></button>
              {fun()}
        </div>
         
    </div>
  );
}

export default Appa;
