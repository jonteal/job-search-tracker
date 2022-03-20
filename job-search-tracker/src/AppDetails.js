import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const AppDetails = () => {

    const { id } = useParams();
    const { data: app, error, isPending } = useFetch('http://localhost:8000/apps/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/apps/' + app.id, {
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
                    <h2>{ app.company }</h2>
                    <p>{ app.position }</p>
                    <p>{ app.dateApplied }</p>
                    <p>{ app.workLocation }</p>
                    <p>{ app.followUpDate }</p>
                    <p>{ app.contactName }</p>
                    <p>{ app.interviewRequested }</p>
                    <p>{ app.interviewDate }</p>
                    <p>{ app.notes }</p>

                    <button onClick={handleClick}>delete app</button>
                </article>
            )}
            
        </div>
    )
}

export default AppDetails;