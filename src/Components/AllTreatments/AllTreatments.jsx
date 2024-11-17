import { useLoaderData } from "react-router-dom";
import ServiceCard from "../serviceCard/ServiceCard";


const AllTreatments = () => {
    const services = useLoaderData();
    return (
        <div className="grid grid-cols-4 gap-10 w-10/12 mx-auto mt-12">
            {
                services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllTreatments;