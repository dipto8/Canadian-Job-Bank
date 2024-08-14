import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatureJobs from "../FeatureJobs/FeatureJobs";


const Home = () => {
    return (
        <div><h2 className="text-5xl text-center">Home</h2>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJobs></FeatureJobs>
            
        </div>
    );
};

export default Home;