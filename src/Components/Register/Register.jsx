import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const {handleRegister, userProfileUpdate} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        setError('')
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        if (password.length < 6) {
            return setError('password must contain at least 6 character')
        }
        if(password !== conPassword){
            return setError("Password did't match");
        }
        if(!/[a-z]/.test(password)){
            return setError('password must contain at least one lowercase letter')
        }
        if(!/[A-Z]/.test(password)){
            return setError('password must contain at least one uppercase letter')
        }
        console.log(name, image, email, password, conPassword)

        handleRegister(email, password)
        .then(res => {
            userProfileUpdate(name, image)
            console.log(res.user)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs"
                        required />
                        
                </div>
                <div>
                    Image
                    <input
                        type="text"
                        name="image"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" required />
                </div>
                <div>
                    Email
                    <input
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" required />
                </div>
                <div>
                    password
                    <input
                        type="text"
                        name="password"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" required/>
                </div>
                <div>
                    confirm password
                    <input
                        type="text"
                        name="conPassword"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" required/>
                </div>
                {error && <p className="text-red-500 text-xs">{error}</p>}
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;