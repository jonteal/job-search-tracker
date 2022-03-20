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
        <div>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { app && (
                <article>
                    <h2>{ app.company }</h2>
                    <button onClick={handleClick}>delete app</button>
                </article>
            )}
            
        </div>
    )
}

export default AppDetails;