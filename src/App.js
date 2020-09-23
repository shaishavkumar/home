import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

const App =() =>{

    return(
        <>
        <Navbar></Navbar>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={Error}></Route>
        </Switch>
        <Footer></Footer>
        </>
    );
}
export default App;