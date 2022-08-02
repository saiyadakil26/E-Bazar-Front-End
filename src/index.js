import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
//import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header.js';
import Home from './component/Home.js';
import Footer from './component/Footer.js';
import Stage from './component/Stage';
import Wel from './component/Wel.js';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Adduser from './component/Adduser';
import Product from './component/Product';
//import Filter from './component/Filter';
//import Captch from './component/Captch';

ReactDOM.render(
  <React.StrictMode>
  <Router>
        <Switch>
          <Route path="/about">
          <Header/>
            <About />
            <Footer/>
          </Route>
          <Route path="/users">
          <Header/>
            <Adduser/>
            <Footer/>
          </Route>
          <Route path="/wel">
           <Wel />
           </Route>
           <Route path="/product">
            <Product />
            <Footer/>
          </Route>
          <Route path="/">
          <Header/>
            <Home />
            <Footer/>
          </Route>
          </Switch>
    </Router>
  {/*<Captch/>
<App />*/}
 {/*<Header/> */}
 {/*<Home/>*/}
 {/*< Stage/>*/}
 {/* <Footer/>*/}
  {/*<Wel/>
  <App/>
{/* <App1/>
<Filter/>  */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
