import React from 'react';
import {NavLink} from 'react-router-dom';

const Card = (prop) => {

    return (
        <>
            <div className="col-md-4 col-10 auto">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={prop.imgsrc} alt="Card Cards cap" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{prop.title}</h5>
                        <p className="card-text">{prop.disc}</p>
                        <NavLink to='/contact' className="btn">Subscribe</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Card;