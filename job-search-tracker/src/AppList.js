import { Link } from 'react-router-dom';

const AppList = ({ apps, company }) => {
    return(
        <div>
            <h2>{ company }</h2>
            {apps.map((app) => (
                <div className='app=preview' key={app.id}>
                    <Link to={`/apps/${app.id}`}>
                        <h2>{ app.company }</h2>
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default AppList;