import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { addToDb } from '../Utilities/fakedb';

const JobDetails = () => {
    const params = useParams();
    const paramsId = parseInt(params.id, 10);

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('/public/jobs.json')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[]);

    if (jobs.length === 0) {
        return <div>Loading...</div>; // or handle loading state
    }

    
    const joblist = jobs.filter(jb => jb.id === paramsId);
    const job = joblist.length > 0 ? joblist[0] : null;
    const { id, job_title, company_name, location, salary, educational_requirements, job_description, job_responsibility, experiences, contact_information } = job;
    return (
        <div>
            <Header>
                <h2>Job Details {id}</h2>
            </Header>
            <section className='w-3/4 mx-auto text-left my-32 grid grid-cols-2 gap-8'>
                <div>
                    <p className='mb-6'><span className='font-bold'>Job description: </span>{job_description}</p>
                    <p className='mb-6'><span className='font-bold'>Job responsibility: </span>{job_responsibility}</p>
                    <p className='mb-6 font-bold'>Educational Requirements: </p>
                    <p>{educational_requirements}</p>
                    <p className="my-6 font-bold">Experiences: </p>
                    <p>{experiences}</p>
                </div>
                <div>
                    <div className='p-8 bg-sky-100 rounded-xl'>
                        <h3 className='text-xl font-bold mb-6'>Job details</h3>
                        <p className='text-xl mb-4'><span className='font-bold'>Salary: </span><span className='text-slate-500'>{salary} (per month)</span></p>
                        <p className='text-xl'><span className='font-bold'>Job title: </span><span className='text-slate-500'>{job_title}</span></p>

                        <h3 className='text-xl font-bold mb-6 mt-8'>Contact Information: </h3>
                        <p className='text-xl mb-4'><span className='font-bold'>Phone: </span><span className='text-slate-500'>{contact_information.phone}</span></p>
                        <p className='text-xl mb-4'><span className='font-bold'>Email: </span><span className='text-slate-500'>{contact_information.email}</span></p>
                        <p className='text-xl'><span className='font-bold'>Address: </span><span className='text-slate-500'>{contact_information.address}</span></p>
                    </div>
                    <button className='w-full py- font-bold text-xl text-white bg-blue-700 rounded-xl mt-6' onClick={() => addToDb(id)}>Apply Now</button>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;