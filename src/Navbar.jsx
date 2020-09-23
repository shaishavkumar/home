import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import './index.css';
import logo from '../src/Images/logo.png';

const Navbar = () => {

    return (
        <>
            <div className=" nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                            <NavLink className="navbar-brand" to="/"><img src={logo} height="40px" width="40px" alt="logo"></img> Digital Sketch</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" exact activeClassName="active_class" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact activeClassName="active_class" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact activeClassName="active_class" to="/service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact activeClassName="active_class" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;