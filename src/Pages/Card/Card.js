import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({course}) => {
    const {id, name, picture} = course
    return (
        <div className='mb-8 mt-4'>
            <div className="card w-full lg:w-96 h-96 bg-base-100 shadow-xl image-full">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{name}</h2>
                    <div className="card-actions justify-end">
                    <Link to={`/course/${id}`}><button className="btn btn-primary">Course Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;