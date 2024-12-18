import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from "$env/static/private";
import pkg from "firebase-admin";

try {
    pkg.initializeApp({
        credential: pkg.credential.cert({
            projectId: FB_PROJECT_ID,
            clientEmail: FB_CLIENT_EMAIL,
            privateKey: FB_PRIVATE_KEY,
        }),
    });
} catch (err) {
    console.error('Firebase adm error: ', err);
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();