import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data'


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'><b>Welcome To My Portfolio!</b></h1>
            <header>
                <h1>
                    {data.name}</h1>
            </header>
            
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    {/* <button><a href="gmail.com">Contact</a></button> */}
                </p>
            


        </div>);
    }
}

export default Header;