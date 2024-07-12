import React from 'react';

const Job = ({job}) => {
    const {logo, job_title, company_name, job_type, remote_or_onsite, location, salary} = job;
    return (
        <div className='text-left border border-solid border-slate-400 rounded-xl p-10'>
            <img className='h-10' src={logo} alt="" />
            <h2 className='text-2xl mt-7 font-bold'>{job_title}</h2>
            <p className='text-xl text-slate-500 font-semibold'>{company_name}</p>
            <div className='my-4'>
                <span className='py-2 px-4 mr-3 font-bold border-solid border-2 border-slate-400 rounded-lg text-blue-400'>{remote_or_onsite}</span>
                <span className='py-2 px-4 border-solid font-bold border-2 border-slate-400 text-blue-400 rounded-lg'>{job_type}</span>
            </div>
            <div>
                <span className='text-slate-600 mr-6'>{location}</span>
                <span className='text-slate-600'>${salary}</span>
            </div>
            <button className='bg-blue-600 text-white font-bold rounded-lg px-8 py-2 mt-6'>View Details</button>
        </div>
    );
};

export default Job;