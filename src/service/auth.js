import firebase from '../config/firebase-config'
import { getAuth, signInWithPopup } from "firebase/auth";



const socialMediaAuth = (provider) => {
    

   
    
    const auth = getAuth();
    return signInWithPopup(auth, provider)
    .then((result) => {
        const authUser = result.user;
        if(authUser){
            localStorage.setItem('mew',JSON.stringify(authUser));
        }
        return authUser;
    }).catch((error) => {
        console.warn(error);
    });
  
}

export default socialMediaAuth;

