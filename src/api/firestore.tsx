import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
export const firestoreCreateDocument = async (
  collectionName: string,
  documentID: string,
  data: any
) => {
  try {
    const docRef = doc(db, collectionName, documentID);

    await setDoc(docRef, data);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;

    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
};
export const firestoreUpdateDocument = async (
  collectionName: string,
  documentID: string,
  data: any
) => {
  try {
    const docRef = doc(db, collectionName, documentID);

    await updateDoc(docRef, data);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;

    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
};
