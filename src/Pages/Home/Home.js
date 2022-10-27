import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='md:w-11/12  mx-auto mt-2'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img alt='' src='https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg' className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='' src="https://hackr.io/blog/media/levels-of-programming-1.png" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='' src="https://cdn.educba.com/academy/wp-content/uploads/2019/10/Best-Programming-Languages.png" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <p className='text-center mt-3 mb-3'>
                <span className='text-lg font-semibold text-blue-700'>To see courses </span>
                <Link to='/courses'>
                    <button className="btn btn-outline btn-success">Click here</button>
                </Link>
            </p>
        </div>
    );
};

export default Home;