import React from "react";
import { Link } from "react-router-dom";

const AddApp = () => {
    return(
    <div>
        <h1>Add an Application!</h1>

        <div className="homeBtnContainer">
            <Link to='/home'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default AddApp;