import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Table from '../Pages/Shared/Table/Table';

const Main = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://learning-course-server-one.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-4 '>
                <div className='col-span-1 hidden md:block'>
                    {
                        courses.map(course =>
                            <Link to={`/course/${course.id}`} key={course.id}>
                                <Table
                                    course={course}>
                                </Table>
                            </Link >)
                    }
                </div>
                <div className='col-span-3 w-full lg:w-11/12 mx-auto p'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;