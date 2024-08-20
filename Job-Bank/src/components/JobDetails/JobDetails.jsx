import { useLoaderData, useParams } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/LocalStorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job =>job.id == idInt)
    console.log( job)
    const handleAppyJob = ()=>{
        saveJobApplication(idInt);
        toast.success('Applied Successfully')

    }
    return (
        <div className="p-4 my-4">
            <div className=" w-40  mx-auto my-6">
            <img className=" bg-cover" src={job.logo} alt="" />
            </div>
       
   
         <div className="grid  md:grid-cols-4 gap-6">
            <div className=" md:col-span-3 ">
                <h2 className="text-lg mb-2"> <span className="font-bold text-2xl">Job Description: </span> {job.job_description}</h2>
                <h2 className="text-lg mb-2"><span className="font-bold text-2xl">Job Responsibility: </span>  {job.job_responsibility}</h2>
                <h2 className="text-lg mb-2"><span className="font-bold text-2xl">Educational Requirements: </span>  {job.educational_requirements}</h2>
                <h2 className="text-lg mb-2"><span className="font-bold text-2xl">Experiences: </span>  {job.experiences}</h2>
                <h2 className="font-bold">Job Details of : {job.job_title}</h2>
                <p>{job.company_name}</p>
            </div>
            <div className=" bg-orange-200 p-4">
                <h2 className="text-2xl p-4 mb-4 font-bold"> Job  Details</h2>
                <hr className="mb-4"/>

                <h2 className="flex font-bold"> Salary:<MdAttachMoney className="text-2xl"></MdAttachMoney>{job.salary}</h2>
                <h2 className="flex font-bold"> Job Title: {job.job_title}</h2>

                <div className="mt-4">
                    <h2 className="mb-2">Contact information</h2>
                    <hr className="mb-4" />

                    <h2 className="flex font-semibold">Phone: {job.contact_information.phone}</h2>
                    <h2 className="flex font-semibold">Phone: {job.contact_information.email}</h2>
                    <h2 className="flex font-semibold">Phone: {job.contact_information.address}</h2>
                </div>

                <button onClick={handleAppyJob} className="btn btn-primary w-full">Apply  now</button>
            </div>

         </div>
         <ToastContainer />
            
        </div>
    );
};

export default JobDetails;