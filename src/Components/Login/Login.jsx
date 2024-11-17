import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useSearchParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";


const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(AuthContext)
    const [error, setError] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password)

        handleLogin(email, password)
        .then(() => {})
        .catch(err => setError(err.message))
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div>
                    Email
                    <input
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    password
                    <input
                        type="text"
                        name="password"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
            {error && <p className="text-red-500">{error.split('/')[1].slice(0,18)}</p>}
            <button onClick={ handleGoogleLogin} className="btn">Google login</button>
            {/* <button onClick={ hanldeLogOut}>LogOut</button> */}
        </div>
    );
};

export default Login;