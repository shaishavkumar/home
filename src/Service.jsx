import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
import './index.css';

const Service = () => {

    return (
        <>
            <div className="my-5 service-heading ">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="services animate__animated animate__backInUp">
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            {
                                Sdata.map((val, index)=>{
                                    return<Card
                                    key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    disc={val.disc}></Card>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Service;