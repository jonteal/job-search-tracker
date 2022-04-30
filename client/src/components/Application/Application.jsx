import { Link } from "react-router-dom";

export default function Application({ application }) {
    return (
        <div className="application">
            <div className="appInfo">
                <Link to={`/application/${application._id}`} className='link'>
                    <span className="applicationTitle">{application.title}</span>
                </Link>
                <hr />
                <span className="applicationDate">
                    {new Date(application.createdAt).toDateString()}
                </span>
            </div>
            {/* <p>{application.</p> */}
        </div>
    )
}