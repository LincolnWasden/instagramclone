// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCTvOV5tOs-7UlZuK6iAD2X2F8H5UsGipc",
  authDomain: "whatsnewwiththis.firebaseapp.com",
  projectId: "whatsnewwiththis",
  storageBucket: "whatsnewwiththis.appspot.com",
  messagingSenderId: "894247825032",
  appId: "1:894247825032:web:676010e700b853f1dd393d"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export {app, db, storage};
