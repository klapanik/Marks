import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, type AddPrefixToKeys } from 'firebase/firestore';
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
        const document = await getDoc(docRef);

        if (document.exists()) {
            return document.data();
        } else {
            console.error("Document is undefined");
        }
    };

    async addDoc(collectionName: string, newData: FirebaseDataType) {
        const collectionRef = collection(db, collectionName);

        try {
            await addDoc(collectionRef, newData);
        } catch (error) {
            throw new Error(`Error in document updating: ${error}`);
        }
    }

    async updateDoc(collectionName: string, docId: string, updatedData: FirebaseDataType) {
        const docRef = doc(db, collectionName, docId);

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
