import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className='mb-[80px]'>
            <div className="navbar shadow-lg bg-base-100 fixed top-0 z-50 md:px-3">
                <div className="flex-1">
                    <img className='h-[30px] md:h-[60px]' src="https://cdn.iconscout.com/icon/free/png-256/code-coding-development-programming-language-board-sign-seo-tool-1-24717.png" alt="" />
                    <a href='/' className="btn btn-ghost normal-case text-lg md:text-xl">Code Learner</a>

                </div>
                <div className="flex-none">
                    <div className='flex'>
                        <Link className='mr-2 md:mr-3' to='/'>Home</Link>
                        <Link className='mr-2 md:mr-3' to='/courses'>Courses</Link>
                        <div> <Link className='mr-2 md:mr-3 hidden md:block' to='/blog'>Blog</Link></div>
                        <div> <Link className='mr-2 md:mr-3 hidden md:block'>FAQ</Link></div>
                        <div> <Link className='mr-2 md:mr-3 hidden md:block'>Dark</Link></div>

                    </div>
                    <div className="dropdown dropdown-end">
                        <div>
                            {
                                user?.uid ?
                                    <>
                                        <Link onClick={handleLogOut} className='hidden md:block mr-3'>Logout</Link>
                                    </> :
                                    <>
                                        <Link className='mr-1 md:mr-3' to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">{user?.photoURL ? <img alt='' src={user.photoURL} /> : <FaUserAlt className='mt-2 ml-2 text-xl'></FaUserAlt>}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 block md:hidden ">
                            <div className='border border-red-200'>
                                {
                                    courses.map(c => <li key={c.id}><Link className='mr-3' to={`/course/${c.id}`} >{c.name}</Link></li>)
                                }
                            </div>
                            <li><Link className='mt-2'>FAQ</Link></li>
                            <li><Link className=''>Dark Mode</Link></li>
                            <li><Link onClick={handleLogOut} href='/'>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;