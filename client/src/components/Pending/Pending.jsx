import React from "react";
import { Link } from "react-router-dom";

const Pending = () => {
    return(
    <div>
        <h1>Pending Applications</h1>

        <div className="homeBtnContainer">
            <Link to='/'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default Pending;