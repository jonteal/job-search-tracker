import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'react';

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    return(
        <div>
            <span>Login</span>
            <form>
                <label>Username</label>
                <input 
                    type='text' 
                    className=''
                    placeholder='Enter your username...'
                    ref={userRef}
                />
                <label>Password</label>
                <input 
                    type='text' 
                    className='loginInput'
                    placeholder='Enter your password...'
                    ref={passwordRef}
                />
                <button className='loginButton' type='submit' disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className='loginRegisterButton'>
                <Link className='link' to='/register'>
                    Register
                </Link>
            </button>
        </div>
    )
}