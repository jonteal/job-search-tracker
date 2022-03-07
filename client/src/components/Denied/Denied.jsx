import React from "react";
import { Link } from "react-router-dom";

const Denied = () => {
    return(
    <div>
        <h1>Companies who don't deserve me!</h1>


        <div className="homeBtnContainer">
            <Link to='/home'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default Denied;