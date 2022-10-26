import React from 'react';

const Card = ({course}) => {
    const {name, picture} = course
    return (
        <div className='mb-8'>
            <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Course Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;