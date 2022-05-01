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
            </div>
        </div>
    )
}

