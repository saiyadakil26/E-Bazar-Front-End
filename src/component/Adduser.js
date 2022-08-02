import React from 'react';
import  "./css/Adduser.css";
import axios from 'axios';
//import { Table } from 'react-bootstrap';
import {Redirect } from 'react-router-dom';
class Adduser extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
        fname :'',
        sname :'',
        dob :'',
        Email : '',
        Username : '',
        pass :'',
        cpass : '',
        mono : ' ' ,
        pho : '',
        msg : ''
       };
      this.addFormData = this.addFormData.bind(this);
    }
    state={redirect:false}
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addFormData(evt)
    {
        const {fname,sname,Email,dob,Username,pass,cpass,mono,pho}=this.state;
      evt.preventDefault();
     const fd = new FormData();
      fd.append('Username',Username);
      fd.append('Email', Email);
      fd.append('pho',pho);
      fd.append('fname',fname);
      fd.append('sname', sname);
      fd.append('dob', dob);
      fd.append('pass', pass);
      fd.append('mono',mono);
      if(fname!=='' && sname!=='' && dob!=='' && Username!=='' && Email!=='' && pass!=='' && cpass!=='' && mono!==''){
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/i.test(this.state.Email)){
        if(/^[a-zA-Z]+$/i.test(this.state.Username) && /^[a-zA-Z]+$/i.test(this.state.sname) && /^[a-zA-Z]+$/i.test(this.state.sname)){
            if (this.state.mono.length===10) {
                if (this.state.pass===this.state.cpass && this.state.pass!=='') {
                    axios.post('http://localhost/savedata.php',fd )
                // .then(res => res.json())
                .then((result) => {
                  this.setState({
                    msg :result.data.data,
                  redirect : true,
                  })     
                  console.log(result.data.data);        
                 })
               
                } else {
                    this.setState({
                        msg :'PASSWORD AND CONFORM PASSWORD NOT MATCH.'
                      }) 
                }
                
            } else {
                this.setState({
                    msg :'WRONG MOBILE NUMBER.'
                  })              
            }
      
  }
  else{
    this.setState({
      msg :'NAME CONTAIN ONLY ALPHABETS '
    })
  }
  }
  else{
    this.setState({
      msg :'WRONG E-mail Address '
    })
  }}
  else{
    this.setState({
        msg :'PLEASE FILL REQUERED INFORMATION INDICATED BY "*"',
    
        //redirect : true,
      })   
     // this.props.history.push("/home");
                 
  }
  }
    render(){
      if (this.state.redirect) {
        return(  <Redirect to="/?id=1" />)   
        }
  return(
    <div className="stage">
    <form className="adt">
    <div className="adt">
    <p className="xy">{this.state.msg}</p>
    <table className="adt">
        <tbody >
            <tr>
            <td className="lga"><b>FIRST NAME :- * </b></td>
			<td className="lga"><b>LASTNAME :- *</b></td>
            <td className="lga"><b>ENTER DOB :- *</b></td>
            </tr><tr>
            <td className="lgh"><input type="text" size="30" placeholder="ENTER YOUR FIRST NAME HERE" id="fname" name="fname" onChange={this.handleChange}/></td>
			<td className="lgh"><input type="text"  size="30" placeholder="ENTER YOUR LAST NAME HERE" id="sname" name="sname" onChange={this.handleChange}/></td>
            <td className="lgh"><input type="date" size="30" placeholder="DD-MM-YYYY"  id="dob" name="dob" onChange={this.handleChange} /></td>
            </tr>
            <tr>
            <td className="lga"><b>USER NAME :- *</b></td>
            <td className="lga"><b>PASSWORD :- *</b></td>
            <td className="lga"><b>CONFORM PASSWORD :- *</b></td></tr><tr>
            <td className="lgh"> <input type="text" size="30" placeholder="ENTER YOUR USER NAME HERE" id="Username" name="Username" onChange={this.handleChange}/></td>
			<td className="lgh"><input type="text"  size="30" placeholder="ENTER YOUR PASSWORD HERE" id="pass" name="pass" onChange={this.handleChange}/></td>
            <td className="lgh"><input type="text"  size="30" placeholder="ENTER PASSWORD AGAIN HERE" id="cpass" name="cpass" onChange={this.handleChange}/></td>
            </tr>
            <tr></tr>
            <tr colSpan="3">
            <td className="lga"><b>E-MAIL :- *</b></td>
            <td className="lga"><b>MOBILE NUMBER :- *</b></td>
            <td className="lga"><b>PHONE NO :- </b></td>
            </tr><tr>
            <td className="lgh"><input type="text" size="30" placeholder="ENTER YOUR E-MAIL HERE" id="Email" name="Email" onChange={this.handleChange}/></td>
			<td className="lgh"><input type="text"  size="30" placeholder="ENTER YOUR MOBILE NUMBER HERE" id="mono" name="mono" onChange={this.handleChange}/></td>
            <td className="lgh"><input type="text"  size="30" placeholder="ENTER YOUR PHONE NUMBER HERE" id="pho" name="pho" onChange={this.handleChange}/></td>
            </tr>
            <tr>
            <td colSpan="3" className="lgr"><button className="block1" onClick={this.addFormData} >SAVE</button></td>
            </tr>
        </tbody>
    </table>
    </div>
    </form>
    </div>
);
    };
}
export default Adduser;