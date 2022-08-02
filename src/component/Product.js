import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Appa from './Headwel'
import { Carousel } from 'react-bootstrap';
import './css/Product.css'
import { Navbar } from 'react-bootstrap';
import { Image ,Toast,Col,Button,Row} from 'react-bootstrap';
 function Product() {
    const at= new URLSearchParams(window.location.search);
    const id = at.get('abc');
    const[val,setval]=useState('');
    const list=localStorage.getItem(id);
    var cart=localStorage.getItem("cart");
    var carts=JSON.parse(cart) ||[];
   //useEffect(()=>{ setval(carts)},[])
    const item=JSON.parse(list);
    carts.push(item);
    const[ver,setver]=useState(false);
    //useEffect(()=>{ setval(...val,item)},[])
    //console.log(carts);
    //console.log(cart);
    //console.log(val);
  var a;
  const [show, setShow] = useState(false);
  function Example() {
    return (
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={2000} position="bottom-end" bg="success" autohide>
            <Toast.Header>
              <strong className="me-auto">ADD TO CART</strong>
              <small>sucses massage</small>
            </Toast.Header>
            <Toast.Body>YOUR ITEM ADD TO CART SUCCSESSFULY</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }
  const fun=()=>{
    if(ver){
    return(<div className="nav-p">
    <h6>DETAIL :{item.gn}....<a href="#"> READ MORE</a></h6>
                </div>)}
  }
     return(<div>
<Appa/>
<div className="cont">
<table><tbody><tr><td>
<div>
    <Container variant="dark">
    <div className="bac" >
<Carousel className="Ca" variant="dark">
  <Carousel.Item interval={1000}>
    <img width="100%" height="100%"
      className="d-block  "
      src={item.img1}
      alt={item.img1}
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img width="100%" height="100%"
      className="d-block w-100"
      src={item.img2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img width="100%" height="100%"
      className="d-block w-100"
      src={item.img3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img width="100%" height="100%"
      className="d-block w-100" 
      src={item.img4} 
      alt={item.img4}
    />
  </Carousel.Item>
</Carousel>
</div>
<div className="ba">
<div onClick={() => setShow(true)}><button className="btn btn-warning mx-2 my-2" onClick={()=> localStorage.setItem("cart",JSON.stringify(carts))}>ADD TO CARD</button></div>
<button className="btn btn-danger mx-2 my-2">BUY NOW</button>
</div>
    </Container>
</div>
</td><td>
{Example()}
  <div className="ba"> 
  <table><tbody><tr>
  <td><h2> ✨ Name : {item.name} ✨</h2><br/></td></tr><tr>
  <td><h5>✔ PRICE : ₹{item.price}/-</h5><br/></td></tr><tr>
  <td><h5>⭐ AVAILABLE👉 {item.qunty}pcs.</h5><br/></td></tr><tr>
  <td><h6>✅ ABOUT : {item.about}....<a href="#"> READ MORE</a></h6><br/></td></tr><tr>
  <td> <Navbar collapseOnSelect expand="lg"  variant="dark" className="nav-p">
  <Navbar.Brand>PRODUCT-MORE DETAIL</Navbar.Brand>
  <div className="bd">
  <button className="vbt" onClick={()=>setver(prevState=>!prevState)}>
  <Image src="./image/collapse2.png" alt="abc" roundedCircle  /></button>
  </div>
  </Navbar>
  {fun()}</td>
      </tr></tbody></table>
  </div>
</td></tr></tbody></table>
</div>
</div>
     )
}
 export default Product;