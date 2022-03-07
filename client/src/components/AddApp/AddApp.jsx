import React from "react";
import { Link } from "react-router-dom";

const AddApp = () => {
    return(
    <div>
        <h1>Add an Application!</h1>

        {/* Form that takes in information about company they applied with.
        Fields to ask about:
        1. Company Name
        2. Date Applied
        3. Remote / Onsite / Hybrid
        4. Next Steps? Follow Up date? Should we give user option to set their follow up by a metric, such as one week out?
        5. Contact name (if applicable)
        6. Should there be an interview requested field that they can added in later?
        6. If so, post interview notes? */}

        <div className="homeBtnContainer">
            <Link to='/home'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default AddApp;