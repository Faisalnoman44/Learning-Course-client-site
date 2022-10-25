import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
 
    return (
        <div className='mb-16'>
            <div className="navbar shadow-lg bg-base-100 fixed top-0 z-50 px-3">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl">Code Learner</a>

                </div>
                <div className="flex-none">
                    <div>
                        <Link className='mr-3' to='/'>Home</Link>
                        <Link className='mr-3' to='/courses'>Courses</Link>
                        <Link className='mr-3'>FAQ</Link>
                        <Link className='mr-3'>{user?.displayName}</Link>
                        <Link className='mr-3'>Dark</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div>
                            {
                                user?.email ?
                                    <>
                                        <span className='mr-3'>{user.email}</span>
                                        <Link onClick={handleLogOut } className='mr-3'>Logout</Link>
                                    </> :
                                    <>
                                        <Link className='mr-3' to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.photoURL ? <img alt='' src="https://placeimg.com/80/80/people" /> : <></>}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a href='/' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='/'>Settings</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;