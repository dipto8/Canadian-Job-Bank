
import { useEffect } from "react";
import Job from "../Job/job";
import { useState } from "react";

const FeatureJobs = () => {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  console.log(Jobs)
  return (
    <div>
      <div className=" text-center ">
        <h2 className="text-5xl font-bold">Feature Jobs {Jobs.length}</h2>
        <p className="text-3xl">
         
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="">
        {Jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
