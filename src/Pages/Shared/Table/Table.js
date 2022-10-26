import React from 'react';

const Table = ({ course }) => {
    return (
            <div className=' border border-gray-400 mt-3'>
                <div className="overflow-x-auto">
                    <div className="table w-full ">
                        <p className='py-9 px-4 text-center text-lg font-semibold hover:bg-blue-300 hover:text-white'>{course.name}</p>
                    </div>
                </div>
            </div>
        
    );
};

export default Table;