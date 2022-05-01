import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
// Get update and delete icons

export default function SingleApplication() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [application, setApplication] = useState({});
    const { user } = useContext(Context);

    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [dateApplied, setDateApplied] = useState('');
    const [workLocation, setWorkLocation] = useState('');
    const [followUpDate, setFollowUpDate] = useState('');
    const [contactName, setContactName] = useState('');
    const [interviewRequested, setInterviewRequested] = useState('');
    const [interviewDate, setInterviewDate] = useState('');
    const [notes, setNotes] = useState('');

    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getApplication = async () => {
            const res = await axios.get('/applications/' + path);
            setApplication(res.data);
            setCompany(res.data.company);
            setPosition(res.data.position);
            setDateApplied(res.data.dateApplied);
            setWorkLocation(res.data.workLocation);
            setFollowUpDate(res.data.followUpDate);
            setContactName(res.data.contactName);
            setInterviewRequested(res.data.interviewRequested);
            setInterviewDate(res.data.interviewDate);
            setNotes(res.data.notes);
        };
        getApplication();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/applications/${application._id}`, {
                data: { username: user.username },
            });
            window.location.replace('/');
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/applications/${application._id}`, {
                username: user.username,
                company,
                position,
                dateApplied,
                workLocation,
                followUpDate,
                contactName,
                interviewRequested,
                interviewDate,
                notes,
            });
            setUpdateMode(false)
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div className="singleApplication">
            <div className="singleApplicationWrapper">

                {/* USER INFO */}
                <div className="singleApplicationInfo">
                    <span className="singleApplicationAuthor">
                        <Link to={`/?user=${application.username}`} className='link'>
                            <b>{application.username}</b>
                        </Link>
                    </span>
                    <span className="singleApplicationDate">
                        {new Date(application.createdAt).toDateString()}
                    </span>
                </div>


                {/* UPDATE - COMPANY */}
                {updateMode ? (
                    <input 
                        type="text" 
                        value={company}
                        className='singleApplicationCompanyInput'
                        autoFocus
                        onChange={(e) => setCompany(e.target.value)}
                    />
                ) : (
                    <h1 className="singleApplicationCompany">
                        {company}
                        {application.username === user?.username && (
                            <div>
                                <button 
                                    className="singlePostIcon"
                                    onClick={() => setUpdateMode(true)}
                                >
                                    Update
                                </button>
                                <button 
                                    className="singlePostIcon"
                                    onClick={handleDelete}
                                >
                                    Update
                                </button>
                            </div>
                        )}
                    </h1>
                )}

                {/* UPDATE - POSITION */}
                {updateMode ? (
                    <input 
                        type="text" 
                        value={position}
                        className='singleApplicationPositionInput'
                        onChange={(e) => setPosition(e.target.value)}
                    />
                ) : (
                    <p className="singleApplicationPosition">
                        {position}
                    </p>
                )}

                {/* UPDATE - dateApplied */}
                {updateMode ? (
                    <input 
                        type="text" 
                        value={dateApplied}
                        className='singleApplicationDateAppliedInput'
                        onChange={(e) => setDateApplied(e.target.value)}
                    />
                ) : (
                    <p className="singleApplicationDateApplied">
                        {dateApplied}
                    </p>
                )}


                {/* UPDATE - workLocation */}
                {updateMode ? (
                    <input 
                        type="text" 
                        value={workLocation}
                        className='singleApplicationWorkLocationInput'
                        onChange={(e) => setWorkLocation(e.target.value)}
                    />
                ) : (
                    <p className="singleApplicationWorkLocation">
                        {workLocation}
                    </p>
                )}


                {/* UPDATE - followUpDate */}
                {updateMode ? (
                    <input 
                        type="text" 
                        value={followUpDate}
                        className='singleApplicationFollowUpDateInput'
                        onChange={(e) => setFollowUpDate(e.target.value)}
                    />
                ) : (
                    <p className="singleApplicationFollowUpDate">
                        {followUpDate}
                    </p>
                )}


                {/* UPDATE - contactName */}
                {updateMode ? (
                    <input 
                        type="text" 
                        value={contactName}
                        className='singleApplicationContactNameInput'
                        onChange={(e) => setContactName(e.target.value)}
                    />
                ) : (
                    <p className="singleApplicationContactName">
                        {contactName}
                    </p>
                )}


                {/* UPDATE - interviewRequested */}
                {updateMode ? (
                    <select 
                        value={interviewRequested}
                        className='singleApplicationInterviewRequestedInput'
                        onChange={(e) => setInterviewRequested(e.target.value)}
                    >
                        <option value="-">-</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                ) : (
                    <p className="singleApplicationInterviewRequested">
                        {interviewRequested}
                    </p>
                )}


                {/* UPDATE - interviewDate */}
                {updateMode ? (
                    <input 
                        disabled={interviewRequested === "No"}
                        placeholder='Interview Date'
                        type="text" 
                        value={interviewDate}
                        className='singleApplicationInterviewDateInput'
                        onChange={(e) => setInterviewDate(e.target.value)}
                    />
                ) : (
                    <p className="singleApplicationInterviewDate">
                        {interviewDate}
                    </p>
                )}


                {/* UPDATE - interviewDate */}
                {updateMode ? (
                    <textarea 
                        type="text" 
                        placeholder="Notes to yourself..."
                        value={notes}
                        className='singleApplicationNotesInput'
                        onChange={(e) => setNotes(e.target.value)}
                    >
                    </textarea>
                ) : (
                    <p className="singleApplicationNotes">
                        {notes}
                    </p>
                )}



                {updateMode && (
                    <button className="singleApplicationButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}

            </div>
        </div>
    )
}

