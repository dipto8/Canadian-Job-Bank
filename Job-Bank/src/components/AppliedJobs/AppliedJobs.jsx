import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/LocalStorage";


const AppliedJobs = () => {
    const jobs =useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(()=>{
        const storedJobIds = getStoredApplication()
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job =>storedJobIds.includes(job.id) )
            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id ===id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs, storedJobIds, jobsApplied)
            setAppliedJobs(jobsApplied)
        }
       


    },[])

    return (
        <div>
            <h2 className="text-4xl">Applied Jobs: {appliedJobs.length}</h2>

            <ul>{
                appliedJobs.map(job=> <li className="border my-6 p-4" key={job.id}>
                    <span className="text-green-600">{job.job_title} at {job.company_name}</span>
                </li>)
                }
                </ul>
        </div>
    );
};

export default AppliedJobs;