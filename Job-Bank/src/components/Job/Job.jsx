import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="">
          <button className="btn btn-outline btn-info mr-3">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-info">{job_type}</button>
        </div>
        <div className="mt-4 flex gap-2">
          <h2 className=" flex">
            <IoLocationSharp className="text-2xl mr-1" /> {location}
          </h2>
          <h2 className=" flex "><MdAttachMoney className="text-xl  " />{salary}</h2>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
          <button className="btn btn-success">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
