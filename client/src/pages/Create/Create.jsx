import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Context } from "../../context/Context";


export default function Create() {

    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    // const [dateApplied, setDateApplied] = useState(new Date());
    const [dateApplied, setDateApplied] = useState('');
    const [workLocation, setWorkLocation] = useState('-');
    const [followUpDate, setFollowUpDate] = useState('');
    // const [followUpDate, setFollowUpDate] = useState(new Date());
    const [contactName, setContactName] = useState('');
    const [interviewRequested, setInterviewRequested] = useState('-');
    const [interviewDate, setInterviewDate] = useState('');
    // const [interviewDate, setInterviewDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [isPending, setIsPending] = useState(false);
    const { user } = useContext(Context);
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newApplication = { 
            username: user.username, 
            company, 
            position, 
            dateApplied, 
            workLocation, 
            followUpDate, 
            contactName, 
            interviewRequested, 
            interviewDate, 
            notes 
        }
    
        setIsPending(true);

        // fetch('http://localhost:5000/apps', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(app)
        // }).then(() => {
        //     console.log('new app added!')
        //     setIsPending(false)
        //     history.push('/');
        // })

        try {
            const res = await axios.post('/applications', newApplication);
            window.location.replace('/application/' + res.data._id);
            setIsPending(false)
            history.push('/');
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div className="create">
            <h2>Add an App</h2>
            <form className="createForm" onSubmit={handleSubmit}>

                {/* Company Name */}
                <label>Company Name</label>
                <input 
                    type="text"
                    placeholder="Company Name"
                    className="createCompanyName"
                    required
                    autoFocus={true}
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />

                {/* Position Name */}
                <label>Position Title</label>
                <input 
                    type="text"
                    placeholder="Position" 
                    className="createPositionName"
                    required
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />

                {/* Date Applied */}
                <label>Date Applied</label>
                <input 
                    // dateFormat="MM/dd/yyyy"
                    type='text'
                    placeholder="Date Applied"
                    className="createDateApplied"
                    // selected={dateApplied} 
                    value={dateApplied}
                    // onChange={(date) => setDateApplied(date)} 
                    onChange={(e) => setDateApplied(e.target.value)}
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
                <input 
                    // dateFormat="MM/dd/yyyy"
                    type='text'
                    placeholder="Follow up date"
                    className="createFollowUpDate"
                    // selected={followUpDate} 
                    // onChange={(Date) => setFollowUpDate(Date)} 
                    onChange={(e) => setFollowUpDate(e.target.value)}
                    value={followUpDate}
                />

                {/* Contact Name */}
                <label>Contact Name</label>
                <input 
                    type="text" 
                    placeholder="Contact Name"
                    className="createContactName"
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
                <input disabled={interviewRequested === "No"} 
                    // dateFormat="MM/dd/yyyy"
                    value={interviewDate}
                    placeholder='Interview Date'
                    className="createInterviewDate"
                    // selected={interviewDate} 
                    onChange={(e) => setInterviewDate(e.target.value)}
                    // onChange={(Date) => setInterviewDate(Date)} 
                />

                {/* Post Interview Notes */}
                <label>Notes</label>
                <textarea
                    className="createNotes"
                    placeholder="Notes to yourself..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                >
                </textarea>

                {/* Add App Button */}
                { !isPending && <button className="createSubmit" type="submit">Add App</button> }
                { isPending && <button disabled>Adding app...</button> }


            </form>
        </div>
    )
}

// export default Create;