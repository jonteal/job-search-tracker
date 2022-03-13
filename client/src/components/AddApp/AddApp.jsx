import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
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

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const app = { company, position }

    };


    return(
    <div className="addAppContainer">
        <h1>Add an Application!</h1>

        <form className="form" onSubmit={handleSubmit}>
        
        {/* Company Applied for */}
            <input 
                className="formInput"
                type="text" 
                required
                // value={company}
                onChange={(e) => setCompanyName(e.target.value)}
                name="companyName"
                placeholder="Company Name" 
            />
            
            <br />

        {/* Position Applied for */}
            <input 
                className="formInput"
                type="text" 
                required
                // value={position}
                onChange={(e) => setPosition(e.target.value)}
                name="position"
                placeholder="Position" 
            />
            
            <br />

        {/* Date Applied */}
            <h5>Date Applied</h5>
            <DatePicker value={dateApplied} onChange={(date) => setDateApplied(date)} />

            <br />

        {/* Type of work - Onsite, Remote, or Hybrid */}
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option>
                    Type (Pick One)
                </option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
            </select>

            <br />

        {/* City */}
            <input 
                className="formInput"
                type="text" 
                name="city"
                placeholder="City" 
            />

            <br />

        {/* State */}
            <input 
                className="formInput"
                type="text" 
                name="state"
                placeholder="State" 
            />

            <br />

        {/* Pay Range */}
            <input 
                className="formInput"
                type="text" 
                name="payRange"
                placeholder="Pay range (if available)" 
            />

            <br />

            {/* Follow Up Date */}
            <h5>Follow up Date</h5>
            <DatePicker selected={followUpDate} onChange={(date) => setFollowUpDate(date)} />


            <br />

            <select>
                <option>
                    Your level of interest (Pick one)
                </option>
                <option>Somewhat interested </option>
                <option>Very interested</option>
                <option>Really want the job</option>
            </select>

            <br />

            { !isPending && <button className="submitBtn">Submit</button> }
            { isPending && <button disabled>Adding application...</button> }
            
        </form>

        <br />


        <div className="homeBtnContainer">
            <Link to='/home'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default AddApp;