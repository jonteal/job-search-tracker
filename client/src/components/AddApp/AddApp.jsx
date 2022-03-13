import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./addapp.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const AddApp = () => {

    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [dateApplied, setDateApplied] = useState('');
    const [type, setType] = useState('Remote');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [payRange, setPayRange] = useState('');
    const [nextStep, setNextStep] = useState('Follow up');
    const [followUpDate, setFollowUpDate] = useState('');
    const [feel, setFeel] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const { data } = await addApp({
    //             variables: inputForm,
    //         })
    //         window.location.assign('/home');

    //     } catch (err) {
    //         console.log(err);
    //     }
    // };


    return(
    <div className="addAppContainer">
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

        <form className="form">
        
            <input 
                className="formInput"
                type="text" 
                name="companyName"
                placeholder="Company Name" 
            />
            
            <br />

            <input 
                className="formInput"
                type="text" 
                name="position"
                placeholder="Position" 
            />
            
            <br />

            {/* Data Picker input component here */}
            <h5>Date Applied</h5>

            <br />

        {/* Type of work - Onsite, Remote, or Hybrid */}
            <select>
                <option>
                    Type
                </option>
                <option>Onsite</option>
                <option>Remote</option>
                <option>Hybrid</option>
            </select>

            <br />

            <input 
                className="formInput"
                type="text" 
                name="city"
                placeholder="City" 
            />

            <br />

            <input 
                className="formInput"
                type="text" 
                name="state"
                placeholder="State" 
            />

            <br />

            <input 
                className="formInput"
                type="text" 
                name="payRange"
                placeholder="Pay range (if available)" 
            />

            <br />

            {/* Data Picker input component here */}
            <h5>Follow up Date</h5>
            <DatePicker selected={followUpDate} onChange={(date) => setFollowUpDate(date)} />


            <br />

            <select>
                <option>
                    Your level of interest
                </option>
                <option>Somewhat interested </option>
                <option>Very interested</option>
                <option>Really want the job</option>
            </select>

            <br />

            <button className="submitBtn">
                Submit
            </button>
            
        </form>

        <br />


        <div className="homeBtnContainer">
            <Link to='/home'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default AddApp;