import { useEffect } from "react";
import Job from "../Job/job";
import { useState } from "react";

const FeatureJobs = () => {
  const [Jobs, setJobs] = useState([]);
  const [datalength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  console.log(Jobs);
  return (
    <div>
      <div className=" text-center ">
        <h2 className="text-5xl font-bold">Feature Jobs {Jobs.length}</h2>
        <p className="text-3xl">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        {Jobs.slice(0, datalength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div  
      className= { datalength ===Jobs.length && 'hidden'}>
        <button
          onClick={() => setDataLength(Jobs.length)}
          className="btn btn-outline btn-primary px-10 "
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
