import React from 'react';
import { Outlet } from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='col-span-1 bg-fuchsia-400'>
                    fds;jas;fda;lfdk
                </div>
                <div className='col-span-3 bg-slate-500'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Courses;