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

    const handleSubmit = (e) => {
        e.preventDefault();
        const app = { companyName, position, dateApplied, type, city, state, payRange, nextStep, followUpDate, feel }

        setIsPending(true);

        fetch('http://localhost:8000/apps', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(app)
        }).then(() => {
            console.log('new app added')
            setIsPending(false)
            history.push('/');
        })
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
                value={companyName}
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
                value={position}
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
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="city"
                placeholder="City" 
            />

            <br />

        {/* State */}
            <input 
                className="formInput"
                type="text" 
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                name="state"
                placeholder="State" 
            />

            <br />

        {/* Pay Range */}
            <input 
                className="formInput"
                type="text" 
                value={payRange}
                onChange={(e) => setPayRange(e.target.value)}
                name="payRange"
                placeholder="Pay range (if available)" 
            />

            <br />

            <select
                value={nextStep}
                onChange={(e) => setNextStep(e.target.value)}
            >
                <option>
                    Next Steps (Pick one)
                </option>
                <option>Follow up</option>
                <option>Await Response from Company</option>
                <option>Disregard Job</option>
            </select>

            <br />


        {/* Follow Up Date */}
            <h5>Follow up Date</h5>
            <DatePicker value={followUpDate} onChange={(date) => setFollowUpDate(date)} />

            <br />

        {/* Level of Interest of Applicant/Client */}
            <select
                value={feel}
                onChange={(e) => setFeel(e.target.value)}
            >
                <option>
                    Your level of interest (Pick one)
                </option>
                <option>Somewhat interested</option>
                <option>Very interested</option>
                <option>Really want the job</option>
            </select>

            <br />

            { !isPending && <button className="submitBtn">Submit</button> }
            { isPending && <button disabled>Adding application...</button> }
            
        </form>

        <br />


        <div className="homeBtnContainer">
            <Link to='/'><button className="ui primary basic button">Home</button></Link>
        </div>
    </div>
    )
}

export default AddApp;