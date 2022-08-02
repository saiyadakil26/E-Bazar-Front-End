import React from 'react';
import'./css/Stage.css';
import About from './About';
import Adduser from './Adduser';
import Wel from './Wel';
import Leftmenu from './Leftmenu';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 Link
} from "react-router-dom";
import Home from './Home';
 
function Stage(){
return(
<div>
<div className="stage">
{/*<About/>*/}
{/*<Leftmenu/>*/}
   {/* <Adduser/>*/}
   {/*<Wel/>*/}
</div>
</div>
);
}
export default Stage;