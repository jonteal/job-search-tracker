import { Link } from "react-router-dom";

export default function Application({ application }) {
    return (

        // Page that displays the Application title as a link
        <div className="application">
            <div className="appInfo">
                <Link to={`/application/${application._id}`} className='link'>
                    <span className="applicationTitle">{application.company}</span>
                </Link>
                <hr />
                <span className="applicationDate">
                    {new Date(application.createdAt).toDateString()}
                </span>
            </div>
            <p>{application.position}</p>
        </div>
    )
}