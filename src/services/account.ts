import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../apis/firebase';


const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, provider)
    } catch (error) {
        console.error('Error signing in with Google:', error);
    }
};

export const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error('Error signing out:', error);
    }
};