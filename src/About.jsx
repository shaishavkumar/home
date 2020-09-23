import React from 'react';
import Common from './Common';
import web from '../src/Images/About.png';

const About = () => {

    return (
        <>
            <Common
                name="Welcome To About Page"
                imgsrc={web}
                disc="“Hi, i am Shaishav Kumar, a Freelance Graphics Designer in Bangaluru, India. I Specialize
                     in professional & stunning Brand Identity Design & Strategic Website Design.”"
                visit= "/error"
                btname="Write Us"></Common>
        </>
    );
}
export default About;