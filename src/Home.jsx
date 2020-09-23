import React from 'react';
import './Home.css';
import Common from './Common';
import web from '../src/Images/Home.png';

const Home =() =>{

    return(
        <>
          <Common
          name="Grow Your Business With"
          imgsrc={web}
          disc="“Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.”"
          visit="/service"
          btname="Get Started"></Common>
        </>
    );
}
export default Home;