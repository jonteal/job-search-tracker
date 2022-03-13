import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
    return(
    <div>
        <h1>WishList Companies</h1>

        <div className="homeBtnContainer">
            <Link to='/'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default Wishlist;