import {Environment} from "~env/environment.interface";


export const environment: Environment = {
  production: true,
  pageTitle: "Nico Kupfer",
  getUrl: "https://kupfer.es/portfolio-api/json/",
  phpUrl: "https://kupfer.es/portfolio-api/api/app.php",
  baseHref: "/",
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
