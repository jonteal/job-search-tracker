import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav>
                <h1>job hunt</h1>
                <div className="links">
                    <Link to='/'>Home</Link>
                    {/* <Link to='/'></Link> */}
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar;