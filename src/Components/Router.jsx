import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Mainlayout/Mainlayout";
import Home from "./Home/Home";
import AllTreatments from "./AllTreatments/AllTreatments";
import MyAppoinments from "./MyAppoinments/MyAppoinments";
import Profile from "./Profile/Profile";
import Details from "./Details/Details";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const serviceRes = await fetch('/service.json');
                    const serviceData = await serviceRes.json();

                    const feedBackRes = await fetch('/happyclient.json');
                    const feedBackData = await feedBackRes.json();

                    return { serviceData, feedBackData }
                }
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/myApoinments',
                element: <MyAppoinments></MyAppoinments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader :async ({params}) => {
                    const res = await fetch('/service.json');
                    const data = await res.json();
                    const singleData = data.find(d => d.id == params.id);
                    return singleData;
                }
            },
            {
                path: '/login',
                element : <Login></Login>
            },
            {
                path: '/register',
                element : <Register></Register>
            },
        ]
    }
]);
export default Router;