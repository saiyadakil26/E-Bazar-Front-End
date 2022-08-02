import React from'react';
import Stage from './Stage';
import logo  from'./image/cait.jpg';
import logoa  from'./image/aaua.jpg';
import { useHistory } from 'react-router-dom';
function About(){
    const history = useHistory();
return(
    <div className="stage">
<div className="zj">
<div className="bj"><button className="btn btn-warning" onClick={()=> history.push("/")}>GOTO LOGIN</button></div>
    <h5>-: ABOUT AAU :-</h5>
    <table><tbody><tr><td>
    <div className="ait">
    Anand Agricultural University (AAU) was established in 2004 at Anand with the support of the Government of Gujarat, Act No.
    (Guj 5 of 2004) dated April 29, 2004. Caved out of the erstwhile Gujarat Agricultural University (GAU), 
    the dream institution of Sardar Vallabhbhai Patel and Dr. K. M. Munshi, the AAU was set up to provide support to the farming community in three facets namely education,
     research and extension activities in Agriculture, Horticulture Engineering, product Processing and Home Science. At present there seven Colleges, 
     seventeen Research Centers and six Extension Education Institute working in nine districts of Gujarat namely Ahmedabad, Anand, Dahod, Kheda, Panchmahal, Vadodara, Mahisagar, Botad and Chhotaudepur.

</div>
</td><td><img src={logoa} className="App" alt="logo"/></td></tr>
 <tr><td colSpan="2"><h5>-: ABOUT CAIT :-</h5></td></tr>
<tr><td>
    <div className="ait">
    Collage Of Information Tecnology Was Established In The Year 2009 Under The Aegis Of Anand Agriculture University.Peopel Can Bay Products From Home At lowest Cost And Get Best Product.
And Also Get A sell And Discount As Well As Big Ofer.We Are Starting The Online Shoping App or Web Application to Help The Farmer Community.
To Help Farmer To Buy Equepment Or Machinery And Pestiside And Other Product From The Home By A Single Click And Farmer Get That Product At The Home.
As Well Farmer Get Facility To Case On Dilivery And Also Get Faility of the Online payment And Farmer Get Best Product At Lowest cost.</div>
</td><td><img src={logo} className="App" alt="logo"/></td></tr>
</tbody>
</table>
</div>
</div>
);
}
export default About;