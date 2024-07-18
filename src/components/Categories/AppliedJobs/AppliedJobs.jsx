import React from 'react';
import Header from '../../Header/Header';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedItem from '../../AppliedItem/AppliedItem';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    const [jobs, setJobs] = useState(appliedJobs);

    return (
        <div>
            <Header>
                <h2>Applied Jobs</h2>
            </Header>
            <section className='w-3/4 mx-auto'>
                {
                    jobs.map(job => <AppliedItem
                        key={job.id}
                        job={job}
                    ></AppliedItem>)
                }
            </section>
        </div>
    );
};

export default AppliedJobs;