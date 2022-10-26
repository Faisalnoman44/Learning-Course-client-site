import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Table from '../Pages/Shared/Table/Table';

const Main = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data=> setCatagories(data))
    },[])

    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-4 '>
                <div className='col-span-1'>
                    {
                        catagories.map(catagory => <Table key={catagory.id}>
                            {catagory.name}
                        </Table>)
                    }
                </div>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;