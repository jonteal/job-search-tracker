import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Job Hunt</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">New App</Link>
            </div>
        </nav>
    )
}

export default Navbar;