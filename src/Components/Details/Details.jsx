import { useLoaderData } from "react-router-dom";
import Model from "../Model/Model";
import { useContext } from "react";
import AuthProvider from "../AuthProvider/AuthProvider";


const Details = () => {
    const { treatment, image, description } = useLoaderData();
    const contextValue = useContext(AuthProvider);
    console.log(contextValue)
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Appoinmetn</button>
                </div>
            </div>
            <Model></Model>
        </div>
    );
};

export default Details;