import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://learning-course-server-one.vercel.app/catagories')
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
                    <img className=' h-[30px] md:h-[60px]' src="https://cdn.iconscout.com/icon/free/png-256/code-coding-development-programming-language-board-sign-seo-tool-1-24717.png" alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-base md:text-xl">Code Learner</Link>

                </div>
                <div className="flex-none">
                    <div className='flex '>
                        <Link className='mr-1 md:mr-3 hover:bg-slate-300 px-2 py-2 rounded-md' to='/'>Home</Link>
                        <Link className='mr-1 md:mr-3 px-2 py-2 rounded-md  hover:bg-slate-300' to='/courses'>Courses</Link>
                        <div><Link className=' md:mr-3 hidden md:block  hover:bg-slate-300 px-2 py-2 rounded-md' to='/blog'>Blog</Link></div>
                        <div><Link className=' md:mr-3 hidden md:block px-2 py-2  hover:bg-slate-300 rounded-md' to='/FAQ'>FAQ</Link></div>
                        <div><Link className=' md:mr-3 hidden md:block px-2 py-2  hover:bg-slate-300 rounded-md'>Dark</Link></div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div>
                            {
                                user?.uid ?
                                    <>
                                        <Link onClick={handleLogOut} className='hidden md:block mr-3  hover:bg-slate-300 px-2 py-2 rounded-md'>Logout</Link>
                                    </> :
                                    <div className="hidden md:block">
                                        <Link className='mr-1 md:mr-3 px-2 py-2 rounded-md  hover:bg-slate-300' to='/login'>Login</Link>
                                        <Link className='mr-1 md:mr-3 px-2 py-2 rounded-md  hover:bg-slate-300' to='/register'>Register</Link>
                                    </div>
                            }

                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar
                        relative
                         before:content-[attr(data-tip)]
                         before:absolute
                         before:px-3 before:py-2
                         before:left-1/2 before:-bottom-3
                         before:w-max before:max-w-xs
                         before:-translate-x-1/2 before:translate-y-full
                         before: bg-gray-200 before:text-blue-500
                         before:rounded-md before:opacity-0
                         before: transition-all
                         
                         after:absolute
                         after:left-1/2 after:-bottom-3
                         after:w-0 after:h-0
                         after:-translate-x-1/2 after:border-8
                         after:border-b-gray-700
                         after:border-l-transparent
                         after:border-t-transparent
                         after:border-r-transparent
                         after:opacity-0
                         after:transition-0

                         hover:before:opacity-100 hover:after:opacity-100

                        " data-tip={user?.displayName}>
                            <div className="w-10 rounded-full">{user?.photoURL ? <img alt='' src={user.photoURL} /> : <FaUserAlt className='mt-2 ml-2 text-xl'></FaUserAlt>}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 block md:hidden ">
                            <div className='border border-red-200'>
                                {
                                    courses.map(c => <li key={c.id}><Link className='mr-3' to={`/course/${c.id}`} >{c.name}</Link></li>)
                                }
                            </div>
                            <li><Link className='mt-2' to='/blog'>Blog</Link></li>
                            <li><Link className='mt-2' to='/FAQ'>FAQ</Link></li>
                            <li><Link>Dark Mode</Link></li>
                            {
                                user?.uid ?
                                    <li><Link onClick={handleLogOut} href='/'>Logout</Link></li>
                                    :
                                    <>
                                        <li><Link className='mr-1 md:mr-3' to='/login'>Login</Link></li>
                                        <li> <Link to='/register'>Register</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;