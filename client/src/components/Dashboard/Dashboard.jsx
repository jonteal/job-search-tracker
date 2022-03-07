import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
    return(
        <div className="mainContainer">
            <div className="dashboardContainer">
                <div className="link wishlist">
                        <Link to="/wishlist">
                            <button className="button">
                                Wishlist
                            </button>
                        </Link>
                </div>

                <div className="link pending">
                        <Link to="/pending">
                            <button className="button">
                                Pending
                            </button>
                        </Link>
                </div>

                <div className="link denials">
                        <Link to="/denials">
                            <button className="button">
                                Denials
                            </button>
                        </Link>
                </div>

                <div className="link offers">
                        <Link to="/offers">
                            <button className="button">
                                Offers
                            </button>
                        </Link>
                </div>
            </div>
            <div className="addapp">
                <Link to="/addapp">
                    <button className="appButton">
                        Add an App!
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Dashboard;