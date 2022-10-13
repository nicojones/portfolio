import {Environment} from "~env/environment.interface";


// const ip = '192.168.210.100';
// const ip = '172.20.10.3';
// const ip = 'localhost:4201';
// const ip = '172.20.10.3';
export const environment: Environment = {
  production: false,
  pageTitle: "NK - Mobile",
  phpUrl: "https://kupfer.es/portfolio-api/api/app.php",
  getUrl: "https://kupfer.es/portfolio-api/json",
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
