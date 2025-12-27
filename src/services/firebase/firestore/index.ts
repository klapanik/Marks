import {
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    type AddPrefixToKeys
} from 'firebase/firestore';
import { db } from '../config';

type FirebaseDataType = { [x: string]: unknown; } & AddPrefixToKeys<string, Record<string, unknown>>;

class Firestore {
    async getAllDocs(collectionName: string) {
        const collectionRef = collection(db, collectionName);

        try {
            const data = await getDocs(collectionRef);
            const docs = data.docs.map(element => element.data());
            return docs;
        } catch (error) {
            throw new Error(`Error in document updating: ${error}`);
        }
    };

    async getDocById(collectionName: string, docId: string) {
        const docRef = doc(db, collectionName, docId);

        try {
            const document = await getDoc(docRef);
            return document.data();
        } catch (error) {
            throw new Error(`Error in getting document: ${error}`);
        }
    };

    async addDoc(collectionName: string, newData: FirebaseDataType) {
        const collectionRef = collection(db, collectionName);

        try {
            await addDoc(collectionRef, newData);
        } catch (error) {
            throw new Error(`Error in adding document: ${error}`);
        }
    }

    async setDoc(collectionName: string, newDocId: string, newData: FirebaseDataType) {
        const docRef = doc(db, collectionName, newDocId);

        try {
            await setDoc(docRef, newData);
        } catch (error) {
            throw new Error(`Error in setting document: ${error}`);
        }
    }

    async updateDoc(collectionName: string, docId: string, updatedData: unknown) {
        const docRef = doc(db, collectionName, docId);

        if (!updatedData) {
            throw new Error('Data in undefined');
        }

        try {
            await updateDoc(docRef, updatedData);
        } catch (error) {
            throw new Error(`Error in document updating: ${error}`);
        }
    };

    async deleteDoc(collectionName: string, docId: string) {
        const docRef = doc(db, collectionName, docId);

        try {
            await deleteDoc(docRef);
        } catch (error) {
            throw new Error(`Error in deleting document: ${error}`);
        }
    }
}

export const firestoreService = new Firestore();
