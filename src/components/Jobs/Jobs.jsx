import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=> {
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className='text-5xl font-bold mb-4'>Featured Jobs</h2>
            <p className='text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-6 w-3/4 mx-auto my-10'>
                {
                    jobs.map(job => <Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;