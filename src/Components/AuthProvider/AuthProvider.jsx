import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ routes }) => {

    const [user, setUser] = useState(null)

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const hanldeLogOut = () => {
        return signOut(auth)
    }
    const userProfileUpdate = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name , photoURL : image 
        })
    }

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
        })
        return () => {unsubscribe}
    }, [])

    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        hanldeLogOut,
        user, setUser,
        userProfileUpdate,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{routes}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    routes: PropTypes.object,
}