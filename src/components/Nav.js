import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return (
        <header>
            <h1 style={{color:"#000"}}>SWCCC</h1>
            <div className="links">
                <Link style={linkStyles} to="/">Home</Link> | <Link style={linkStyles} to="/about">About</Link>
            </div>
        </header>
    )
}

const linkStyles = {
    textDecoration:"none",
    color:"#000"
}

export default Nav;
