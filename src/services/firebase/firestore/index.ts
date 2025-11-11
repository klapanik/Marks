import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config';

class Firestore {
    async getAllDocs(collectionName: string) {
        const collectionRef = collection(db, collectionName);

        const data = await getDocs(collectionRef);
        const docs = data.docs.map(element => element.data());
        return docs;
    };
}

export const firestoreService = new Firestore();
