import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const AppDetails = () => {

    const { id } = useParams();
    const { data: app, error, isPending } = useFetch('http://localhost:5000/apps/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:5000/apps/' + app.id, {
            method: 'DELETE'
    }).then(() => {
        history.push('/');
    })
}
    return(
        <div className="app-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { app && (
                <article>
                    <h2><span className="app-field">Company: </span> { app.company }</h2>
                    <p><span className="app-field">Position: </span> { app.position }</p>
                    <p><span className="app-field">Date Applied: </span>{app.dateApplied}</p>
                    <p><span className="app-field">Work Location: </span> { app.workLocation }</p>
                    <p><span className="app-field">Follow Up Date: </span> { app.followUpDate }</p>
                    <p><span className="app-field">Contact Name: </span> { app.contactName }</p>
                    <p><span className="app-field">Interview Requested: </span> { app.interviewRequested }</p>
                    <p><span className="app-field">Interview Date: </span> { app.interviewDate }</p>
                    <p><span className="app-field">Notes: </span> { app.notes }</p>

                    <button onClick={handleClick}>delete app</button>
                </article>
            )}
            
        </div>
    )
}

export default AppDetails;