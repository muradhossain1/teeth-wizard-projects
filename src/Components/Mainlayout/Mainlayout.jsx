import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";


const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;