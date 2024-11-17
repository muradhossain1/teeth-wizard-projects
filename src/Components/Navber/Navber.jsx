import { NavLink } from "react-router-dom";
import "./Navber.css"

const Navber = () => {
    return (
        <div className="min-h-20 bg-blue-950 text-white px-8 flex justify-between items-center">
            <div>
                <h2 className="text-xl font-extrabold">TEETH WIZARD</h2>
            </div>
            <div className="space-x-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/allTreatments'>AllTreatments</NavLink>
                <NavLink to='/myApoinments'>MyApoinments</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
               <NavLink to='/login'> <button className="btn btn-primary">Login</button></NavLink>
            </div>
        </div>
    );
};

export default Navber;
