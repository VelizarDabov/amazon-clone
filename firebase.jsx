import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";




const app = getApps().length ? getApps():initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export {db, storage}