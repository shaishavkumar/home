import React from 'react';
import './Home.css';
import {NavLink} from 'react-router-dom'

const Common =(prop) =>{

    return(
        <>
        <section id="header" className="d-flex align-items-center main-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 order-2 order-lg-1 d-flex flex-column justify-content-center animate__animated animate__backInLeft">
                            <h1>{prop.name} <strong className="brand-name">Digital Sketch</strong></h1>
                            <h5 className="my-3">{prop.disc}</h5>
                            <div className="mt-3">
                                <NavLink to={prop.visit} className="btn-get-started">{prop.btname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={prop.imgsrc} className="img-fluid animated" alt="Home"></img>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Common;