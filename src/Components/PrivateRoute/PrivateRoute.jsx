import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({ children }) => {
    const {user} = useContext(AuthContext);
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children : PropTypes.object
}