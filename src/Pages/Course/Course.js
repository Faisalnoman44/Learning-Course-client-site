import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Course = () => {
    const course = useLoaderData()
    const { id, name, picture, details } = course
    return (
        <div className='px-8 bg-emerald-900 mb-4 pb-3'>
            <h1 className='text-2xl md:text-4xl text-center my-5 text-white pt-2'>Course Name: {name} </h1>
            <div className='text-center m-2'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className="btn btn-outline btn-accent mb-2" onClick={toPdf}>Download PDF</button>}
                </Pdf>
            </div>
            <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl md:w-10/12 mx-auto h-[90vh] md:h-[80vh]">
                <figure className='w-full h-64 md:h-full md:w-6/12'>
                    <img className='' alt='' src={picture}></img>
                </figure>
                <div className="card-body bg-emerald-200 w-full md:w-5/12">
                    <h2 className="card-title">{name}</h2>
                    <p>{details?.slice(0, 200) + '...'}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/coursedetails/${id}`} ><button className="btn btn-primary">Get premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;