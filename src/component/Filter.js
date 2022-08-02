import React from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl,Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
class Filter extends React.Component{
constructor(){
    super();
    this.state={
        item : [],
        brand : [],
        ser : ''
        };
  }
componentDidMount(){
    fetch("http://localhost/filter1.php")
        .then(res => res.json())
        .then(
            (result) =>{
                this.setState({
                item : result
                });
            }
        )
}
evn=(e)=>{
  var d;
  if(e.target.name==="sear"){d=this.state.ser}
  else{d=e.target.name}
      const fd = new FormData();
      fd.append('brand',d);
      axios.post('http://localhost/filter2.php',fd )
      .then( (result) =>{
            this.setState({
                brand : result.data,
               });
               if(result.data.length===0){ if (this.props.onChange) {
                this.props.onChange(d);
              }}
            }
    )
  }
    evnt=(e)=>{
      var d=e.target.name;
      if (this.props.onChange) {
      this.props.onChange(d);
    }  
}
render(){ 
return(<div className="con">
<Navbar collapseOnSelect expand="lg"  variant="dark" className="color-nav">
  <Navbar.Brand href="#home" className="">PRODUCT-FILTER</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <div className="nav1">
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Navbar className="me-auto"><table ><tbody><tr><td>
   {
       this.state.item.map(it =>(<span key={it.id}><button className="btn btn-primary mx-1 my-1" onClick={this.evn} name={it.pname} >{it.pname}</button></span>))
   }</td></tr></tbody></table>
 </Navbar>
    </Navbar.Collapse>
    </div>
</Navbar>
 <Navbar className="me-auto nav1" expand="lg" bg="light" variant="dark" >
 <div className="nav1">
 <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="SEARCH ANY PRODUCT OR BRAND 🧐"
        className="cla"
        size="50"
        aria-label="Search"
        value={this.state.ser}
        onChange={(e)=>{
        this.setState({ser : e.target.value})  
        }}
      />
      <Button variant="outline-success" name="sear" id="sear" onClick={this.evn}>🔍</Button>
    </Form>
 <table><tbody><tr><td>
   {
       this.state.brand.map(it =>(<span key={it.id}><button className="btn btn-warning mx-1 my-1" onClick={this.evnt} name={it.bname} >{it.bname}</button></span>))
   }</td></tr></tbody></table></div>
 </Navbar>
    </div>
    )
}
}
export default Filter;