import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar">
                <h1>job hunt</h1>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/addapp'>Add App</Link>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar;