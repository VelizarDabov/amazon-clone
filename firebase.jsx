import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAuZWm0InyHdUpsWO1Mue1mqM4ggLlPV2M",
    authDomain: "amzn-clone-c9101.firebaseapp.com",
    projectId: "amzn-clone-c9101",
    storageBucket: "amzn-clone-c9101.appspot.com",
    messagingSenderId: "873322776576",
    appId: "1:873322776576:web:78c5b3feb29d2b186430e5"
  };


const app = getApps().length ? getApps():initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export {db, storage}