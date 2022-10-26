import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Table from '../Pages/Shared/Table/Table';

const Main = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-4 '>
                <div className='col-span-1'>
                    {
                        courses.map(course => <Link to={`/course/${course.id}`}> <Table key={course.id} course={course}></Table></Link >)
                    }
                </div>
                <div className='col-span-3 w-11/12 mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;