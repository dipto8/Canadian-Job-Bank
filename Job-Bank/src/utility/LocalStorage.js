const getStoredApplication = ()=>{
    const storedJobApplication = localStorage.getItem('Job-Application')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return [];
}


const saveJobApplication = id =>{
    const storedJobApplication =getStoredApplication();
    const existsJob =storedJobApplication.find(jobId => jobId == id)
    if(!existsJob){
        storedJobApplication.push(id)
        localStorage.setItem('Job-Application', JSON.stringify(storedJobApplication))
    }

}

export {saveJobApplication, getStoredApplication}