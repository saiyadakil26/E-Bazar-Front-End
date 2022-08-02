import React,{useState,useEffect} from 'react';
import Footer from './Footer';
import Appa from './Headwel.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './css/Wel.css'; 
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import logo  from './image/sernot.png';
import Filter from './Filter';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Image } from 'react-bootstrap';
function Wel(props){
  const history = useHistory();
  const [item,setitem]=useState([])
  useEffect(()=>{
    fetch("http://localhost/datarandom.php")
    .then(res => res.json())
        .then(
            (result) =>{
              setitem(result)
             }
        )
        
  },[])
  const eventhandler = data =>{
    const fd = new FormData();
    fd.append('brand',data);
    axios.post('http://localhost/serdata.php',fd )
    .then( (result) =>{
    setitem(result.data)  
    });
          
            };
  var x=0;
  var st=0;
 const notfound=()=>{
   var name=require("./image/vb.jpg");
  /// console.log(name.default)
    if(item.length===0){
      return(
       <div className="srnot"><img src={logo} width="330px" height="213px" className=""/><h2 color="white"><p>Sorry,No Result Found!</p></h2><p>Please Check The Spelling And Try Again</p></div>
      )
    }
  }
  var sr;
  var url="/product?abc=";
return(<div>
    
    <Appa />
    <Filter onChange={eventhandler}/>
    <div className="main">
    <div className="conq">
    <Row className="row">
    {notfound()}
    {
       item.map(it =>(
            <Card style={{ width: '14rem' , hight:'20rem'}} className="mx-1 my-1 bbc" value={x} key={x} onClick={()=>localStorage.setItem(it.name,JSON.stringify(it))}>
            <div onClick={()=> history.push(url+it.name)}>
  <Card.Img variant="top" src={it.img1} alt={it.img1}/>
  <Card.Body>
    <Card.Title value={x=x+1}>{it.name}..</Card.Title>
    <Card.Text style={{color:"green"}}>
   PRICE : ₹{it.price}<br/>
    AVAILABLE👉 {it.qunty}pcs.
    </Card.Text>
  </Card.Body></div>
</Card>
  ))
}
</Row>
</div></div>
    <Footer/>
    </div>
);
}
export default Wel;