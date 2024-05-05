import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { getFireBaseErrorMessage } from "@/utils/getFirebaseErrorMessage";

export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFireBaseErrorMessage(
      "createUserWithEmailAndPassword",

      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};
export const firebaseSingninUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFireBaseErrorMessage(
      "signInWithEmailAndPassword",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};
export const firebaseLogOutUser = async () => {
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFireBaseErrorMessage("signOut", firebaseError.code);
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};
export const sendEmailToResetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFireBaseErrorMessage(
      "sendPasswordResetEmail",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};
export const sendEmailVerificationProcedure = async () => {
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      return { data: true };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      const errorMessage = getFireBaseErrorMessage(
        "sendEmailVerification",
        firebaseError.code
      );
      return {
        error: {
          code: firebaseError.code,
          message: errorMessage,
        },
      };
    }
  } else {
    return {
      error: {
        code: "unknow",
        message: "Une erreur est survenue",
      },
    };
  }
};
export const updateUserIdentificatonData = async (uid: string, data: any) => {
  const result = await fetch(
    "https://us-central1-courreact.cloudfunctions.net/updateUser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: uid, data: data }),
    }
  );

  if (!result.ok) {
    const errorResponse = await result.json();
    const firebaseError = errorResponse as FirebaseError;
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
  return { data: true };
};
