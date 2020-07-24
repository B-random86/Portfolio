import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
        <Fade bottom>Contact Me</Fade></h1>
        <div className='contact-content'>
                <h1>
                    <span className='amazing-color'>
                Let’s create the<br></br>
                future together!</span></h1>
                    <a href="http://www.gmail.com/eosguitarist27" className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        
        <br />
        <br />
        </div>);
    }
}
 
export default Contact;