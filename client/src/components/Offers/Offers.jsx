import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
    return(
    <div>
        <h1>My Offers!</h1>

        <div className="homeBtnContainer">
            <Link to='/home'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default Offers;