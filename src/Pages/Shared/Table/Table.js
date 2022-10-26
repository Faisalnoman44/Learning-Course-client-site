import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ course }) => {
    return (
            <div className=' border border-gray-400 mt-3'>
                <div className="overflow-x-auto">
                    <table className="table w-full ">
                        <th className='py-9 px-4 text-center hover:bg-blue-300 hover:text-white'>{course.name}</th>
                    </table>
                </div>
            </div>
        
    );
};

export default Table;