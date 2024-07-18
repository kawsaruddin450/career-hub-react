import { getappliedJob } from "../Utilities/fakedb";

const appliedJobsLoader = async () => {
    const loadedProducts = await fetch('jobs.json');
    const products = await loadedProducts.json();
    const savedJobs = [];

    const storedCart = getappliedJob();
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === parseInt(id));
        if(addedProduct){
            savedJobs.push(addedProduct);
        }
    }
    console.log(savedJobs);
    return savedJobs;
}

export default appliedJobsLoader;