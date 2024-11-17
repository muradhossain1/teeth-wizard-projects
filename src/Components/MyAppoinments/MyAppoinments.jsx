import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyAppoinments = () => {
    const contextValue = useContext(AuthContext);
    console.log(contextValue)
    return (
        <div>
            my appoinments
        </div>
    );
};

export default MyAppoinments;