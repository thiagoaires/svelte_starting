import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import {
  FC_API_KEY,
  FC_AUTH_DOMAIN,
  FC_PROJECT_ID,
  FC_STORAGE_BUCKET,
  FC_MESSAGING_SENDER_ID,
  FC_APP_ID,
} from '$env/static/private';

const firebaseConfig = {
  apiKey: FC_API_KEY,
  authDomain: FC_AUTH_DOMAIN,
  projectId: FC_PROJECT_ID,
  storageBucket: FC_STORAGE_BUCKET,
  messagingSenderId: FC_MESSAGING_SENDER_ID,
  appId: FC_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
