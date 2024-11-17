import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../serviceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";


const Home = () => {
    const services = useLoaderData();
    const { serviceData, feedBackData } = services;

    return (
        <div className="">
            <Banner></Banner>
            <div className="grid grid-cols-4 gap-10 w-10/12 mx-auto mt-12">
                {
                    serviceData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <button className="btn btn-primary mx-auto block"><NavLink to='/allTreatments'>Show ALL</NavLink></button>
            
            <FeedBack feedBackData={feedBackData}></FeedBack>
        </div>
    );
};

export default Home;