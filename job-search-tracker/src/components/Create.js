import { useState } from "react";


const Create = () => {

    const [title, setTitle] = useState('');
    const [position, setPosition] = useState('');
    const [dateApplied, setDateApplied] = useState('');
    const [workLocation, setWorkLocation] = useState('');
    const [followUpDate, setFollowUpDate] = useState('');
    const [contactName, setContactName] = useState('');
    const [interviewRequested, setInterviewRequested] = useState('');
    const [interviewDate, setInterviewDate] = useState('');
    const [notes, setNotes] = useState('');

    return(
        <div>
            <h2>Add an App</h2>
            <form>
                {/* Company Name */}
                <label>Company Name</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                {/* Date picker */}

                {/* Job Type */}
                <label>Job Type</label>
                <select 
                    value={workLocation}
                    onChange={(e) => setWorkLocation(e.target.value)}
                >
                    <option value="Work from Home"></option>
                    <option value="In Office"></option>
                    <option value="Hybrid"></option>
                </select>

                {/* Follow Up Date */}
                <label>Follow Up Date</label>
                {/* Date Picker */}

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
                    type="checkbox"

                ></select>

                {/* Interview Date */}
                <label>Interview Date</label>
                {/* Date Picker */}

                {/* Post Interview Notes */}
                <label>Notes</label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                >
                </textarea>

            </form>
        </div>
    )
}

export default Create;