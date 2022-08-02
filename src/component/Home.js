import React, { useState,useEffect } from 'react';
import './css/Home.css';
import SH from './SH';
import 'react-bootstrap';
import { Link, useHistory,Redirect } from 'react-router-dom';
import Captch from './Captch';
import axios from 'axios';
function Home(props){
    var ts = { "cellpadding":"10px"
    };
    const [uname,setuname]=useState();
    const [pass,setpass]=useState();
    const [cap,setcap]=useState();
    const [em,setem]=useState("Now Try To Login");
    const [mem,setmem]=useState();
    const bw ={"width":"85%"}
    const history = useHistory();
    const [isp0ass, setp0as]= useState(false);
    const [redirect, setredirect]= useState(false);
    const at= new URLSearchParams(window.location.search);
    const id = at.get('id');
    if (id) {
        var m="Now Try To Login";
    }
     const renderElement =()=>{
        if(id)
          { return <tr className="xv"><td className="xv">
           {em}</td></tr>;}
           else{ if(mem !=null)
           {return(<tr className="xv"><td className="xv">
           {mem}</td></tr>  )}}
     }
     const eventhandler = data =>{ setpass(data.pasword)};
     const evn = data =>{ setp0as(data.pasword)};
     localStorage.setItem("cart",JSON.stringify(''));
   //  console.log(uname);
    // console.log(pass);
     //console.log(isp0ass);
     //console.log(cap);
    const addFormData=()=>{
        if(isp0ass==cap){
    const fd = new FormData();
    fd.append('Username',uname);
    fd.append('pass', pass);
        axios.post("http://localhost/fechdata.php",fd)
       // fetch("http://localhost/fechdata.php",fd)
       // .then(res => res.json())
        .then(
            (result) =>{
              console.log(result.data);
              if (result.data.length != 0 ) {
                    setredirect(true);
              }
               else{setem("USERNAME OR PASSWORD IS WRONG");setmem("USERNAME OR PASSWORD IS WRONG");}
            }
        )
    }else{
        setem("Captch Not Match");
        setmem("Captch Not Match");
        }
     }
     if (redirect) {
        return(  <Redirect to="wel?id=1" />)   
        }
    return(
        <div >
            <div className="home">
                <table width="100%">    
                <tbody className="table"><tr rowSpan="2"><td width="50%">
                <table style={ts} className="lg" ><tbody >
                {renderElement( )}
                <tr>
                        <td className="lgr"><b>USERNAME :-</b> </td>
                        </tr>
                        <tr>
                        <td className="lgc"><input type="text"size="30" placeholder="ENTER YOUR USERNAME HERE" onBlur={e => setuname(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td className="lgr"><b>PASSWORD :- </b></td>
                        </tr>
                        <tr>
                        <td className="lgc">
                        <SH onChange={eventhandler} />
                        </td>
                        </tr>
                        <tr>
                        <td className="lgc">
                        <Captch onChange={evn}/></td></tr>
                        <tr>
                        <td className="lgc"><input type="text" size="30" placeholder="ENTER ABOVE CAPTCHA HERE" onBlur={e => setcap(e.target.value)}/></td>
                    </tr>
                        <tr>
                    <td colSpan="2" className="lgc">
                        <button className="btn btn-primary" style={bw}  onClick={addFormData} >LOGIN</button>
                    </td></tr>
                    <tr>
                        <td className="ab">IF YOU ARE NEW USER <b><Link to="/users"><font size="10px" >CLICK HERE</font></Link></b><br/>FORGET USERNAME OR PASSWORD</td>
                        </tr>
                        </tbody>
                </table>
                </td><td>
                <table className="abc">
                <tbody>
                <tr><td colSpan="2">
            <marquee ><p>⋆ WHITHOUT LOGIN YOU CAN VISIT OUR WEBSITE BUT CAN'T BUY ANYTHING.</p></marquee>
                </td></tr>
                    <tr>
                        <td className="tb"><button className="btn btn-warning" onClick={()=> history.push("/wel")}>ENTER WITHOUT LOGIN</button></td>
                        <td className="tbd"><button className="btn btn-warning"onClick={()=> history.push("/about")}>ABOUT US</button></td>
                    </tr>
                    </tbody>
                </table>
                </td></tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}
export default Home;