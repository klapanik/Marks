import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config";

class FirebaseAuth {
    async signInUser(signInType: 'EmailAndPassword' | 'Google' | string, payload: { email: string, password: string } | undefined) {
        if (signInType === "EmailAndPassword" && payload) {
            this.createUserWithEmailAndPassword(payload.email, payload.password);
        } else if (signInType === "Google") {
            this.sighInWithGoogle();
        }
    };

    async createUserWithEmailAndPassword(email: string, password: string) {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            throw new Error(`Error in signing in: ${error}`);
        }
    }

    async sighInWithGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            throw new Error(`Error in signing in: ${error}`);
        }
    }

}

export const firebaseAuthService = new FirebaseAuth();
