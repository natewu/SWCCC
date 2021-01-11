import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import navItem from './NavItem';

class Nav extends Component{
    state = {
        navLinks: [
            {
                "ID":1,
                "title":"Home",
                "link":"/"
            },
            {
                "ID":2,
                "title":"About",
                "link":"/about"
            }
        ]
    }

    render(){
        return (
            <header style={{backgroundColor:"rgba(0, 0, 0, 0.1)", gridTemplateColumns:"1fr 1fr 3fr 1fr", display:"grid"}}>
                <h1 style={{color:"#000", gridColumn:"2"}}>Logo</h1>
                <div className="links" style={{display:"grod", gridColumn:"3", gridTemplateColumns:"1fr 1fr 1fr"}} >
                    {/* <Link style={{linkStyles}} to="/">Home</Link>
                    <Link style={linkStyles} to="/about">About</Link> */}
                    <navItem style={{display:"grid",gridColumn:"3"}}ID={Nav.ID} title={Nav.title} link={Nav.link}/>
                </div>
            </header>
        )
    }
}

const linkStyles = {
    textDecoration:"none",
    color:"#000",
    display:"grid"
}

export default Nav;
