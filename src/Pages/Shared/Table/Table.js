import React from 'react';

const Table = (props) => {
    console.log(props.children)
    return (
        <div className=''>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                        
                            <th className='py-9 px-4 text-center hover:bg-blue-300'>{props.children}</th>
                </table>
            </div>
        </div>
    );
};

export default Table;