import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Context } from "../../context/Context";


const Create = () => {

    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [dateApplied, setDateApplied] = useState(new Date());
    const [workLocation, setWorkLocation] = useState('-');
    const [followUpDate, setFollowUpDate] = useState(new Date());
    const [contactName, setContactName] = useState('');
    const [interviewRequested, setInterviewRequested] = useState('-');
    const [interviewDate, setInterviewDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [isPending, setIsPending] = useState(false);
    const { user } = useContext(Context);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const app = { company, position, dateApplied, workLocation, followUpDate, contactName, interviewRequested, interviewDate, notes }
    
        setIsPending(true);

        fetch('http://localhost:5000/apps', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(app)
        }).then(() => {
            console.log('new app added!')
            setIsPending(false)
            history.push('/');
        })
    }

    return(
        <div className="create">
            <h2>Add an App</h2>
            <form onSubmit={handleSubmit}>
                {/* Company Name */}
                <label>Company Name</label>
                <input 
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />

                {/* Position Name */}
                <label>Position Title</label>
                <input 
                    type="text" 
                    required
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />

                {/* Date Applied */}
                <label>Date Applied</label>
                <DatePicker 
                    dateFormat="MM/dd/yyyy"
                    selected={dateApplied} 
                    onChange={(date) => setDateApplied(date)} 
                />

                {/* Job Type */}
                <label>Work Location</label>
                <select 
                    value={workLocation}
                    onChange={(e) => setWorkLocation(e.target.value)}
                >
                    <option value="-">-</option>
                    <option value="Work from Home">Work from Home</option>
                    <option value="In Office">In Office</option>
                    <option value="Hybrid">Hybrid</option>
                </select>

                {/* Follow Up Date */}
                <label>Follow Up Date</label>
                <DatePicker 
                    dateFormat="MM/dd/yyyy"
                    selected={followUpDate} 
                    onChange={(Date) => setFollowUpDate(Date)} />

                {/* Contact Name */}
                <label>Contact Name</label>
                <input 
                    type="text" 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                />

                {/* Interview Requested - Checkbox */}
                <label>Interview Requested</label>
                <select
                    value={interviewRequested}
                    onChange={(e) => setInterviewRequested(e.target.value)}
                >
                    <option value="-">-</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                
                <label>Interview Date</label>
                {/* Date Picker */}
                <DatePicker disabled={interviewRequested === "No"} 
                    dateFormat="MM/dd/yyyy"
                    selected={interviewDate} 
                    onChange={(Date) => setInterviewDate(Date)} 
                />

                {/* Post Interview Notes */}
                <label>Notes</label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                >
                </textarea>

                {/* Add App Button */}
                { !isPending && <button>Add App</button> }
                { isPending && <button disabled>Adding app...</button> }


            </form>
        </div>
    )
}

export default Create;