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
            <b>
            <p>"I'm a very outgoing person who likes to better myself! <br />
            I am new to coding so take it easy on my portfolio<br />
            as I am planning on making it better as my experience<br />
            increases. Still trying to work out the bugs. I cant <br />
            wait to get to work with you and become a part of<br />
            your coding family."
            </p></b>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
        </div>  );
    }
}
 
export default About;