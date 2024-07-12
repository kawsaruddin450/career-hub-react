
import React from 'react';
import User from '../../assets/images/user.png'
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <header className='w-3/4 flex gap-12 mx-auto'>
                <div className='text-left'>
                    <h1 className='text-7xl font-bold'>One Step Closer To Your <span className='text-sky-400'>Dream Job</span></h1>
                    <p className='my-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-sky-600 text-white rounded-lg py-2 px-8'>Get Started</button>
                </div>
                <img className='w-1/2' src={User} alt="user" />
            </header>
            <Categories></Categories>
        </div>
    );
};

export default Home;