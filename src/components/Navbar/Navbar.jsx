import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='w-3/4 mx-auto flex justify-between py-14'>
            <Link to="/" className='text-slate-900 text-3xl font-bold'>CareerHub</Link>
            <div>
                <Link className='text-slate-950 mr-5' to="/">Home</Link>
                <Link className='text-slate-950 mr-5' to="/statistics">Statistics</Link>
                <Link className='text-slate-950 mr-5' to="/appliedJobs">Applied Jobs</Link>
                <Link className='text-slate-950' to="/blog">Blog</Link>
            </div>
            <button className='bg-violet-700 text-white rounded-lg py-2 px-6'>Start Applying</button>
        </nav>
    );
};

export default Navbar;