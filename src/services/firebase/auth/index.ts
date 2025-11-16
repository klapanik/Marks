import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../config";

class FirebaseAuth {
    async createUserWithEmailAndPassword(email: string, password: string) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw new Error(`Error in signing in: ${error}`);
        }
    }

    async signInWithGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            throw new Error(`Error in signing in: ${error}`);
        }
    }

    async signInWithEmailAndPassword(email: string, password: string) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            throw new Error(`Error in signing in: ${error}`);
        }
    }

    async signOutUser() {
        await signOut(auth);
    }
}

export const firebaseAuthService = new FirebaseAuth();
