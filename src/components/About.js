import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class About extends Component {
    state = {  }
    render() { 
        return (
        <div className=' about'>
           
            <div className=' about-content'>
            <h1><Fade bottom>Just Me</Fade></h1>
            <p><b>{data.abouttext} <br />
            {data.abouttext1}</b>
            </p>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
        </div>  );
    }
}
 
export default About;