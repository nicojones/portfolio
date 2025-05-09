import {Environment} from "~env/environment.interface";
import {Constants} from "~app/constants.enum";


export const environment: Environment = {
  production: true,
  pageTitle: "Nico Kupfer",
  pocketBase: "http://kupfer.es:8090",
  fileStorage: (bucket: string, name: string) => `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${Constants.STORAGE_BUCKET_FOLDER}%2F${name}?alt=media`,
  dbKeyPrefix: "",
  fireBase: {
    apiKey: "AIzaSyAA-rfKPDUp0VZwIZjFVGkwkx5BkdtmjoY",
    authDomain: "kupferes-serefpuk.firebaseapp.com",
    projectId: "kupferes-serefpuk",
    databaseURL: "https://kupferes-serefpuk-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "kupferes-serefpuk.appspot.com",
    messagingSenderId: "69157313368",
    appId: "1:69157313368:web:2ae3b57913536a4af8e32d",
    measurementId: "G-1QBYZKH67K"
  }
};
