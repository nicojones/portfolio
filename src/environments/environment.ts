// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from "~env/environment.interface";


export const environment: Environment = {
  production: false,
  pageTitle: "NK - Local",
  phpUrl: "https://kupfer.es/portfolio-api/api/app.php",
  getUrl: "https://kupfer.es/portfolio-api/json",
  baseHref: "/",
  fireBase: {
    apiKey: "AIzaSyAA-rfKPDUp0VZwIZjFVGkwkx5BkdtmjoY",
    authDomain: "kupferes-serefpuk.firebaseapp.com",
    projectId: "kupferes-serefpuk",
    storageBucket: "kupferes-serefpuk.appspot.com",
    databaseURL: "https://kupferes-serefpuk-default-rtdb.europe-west1.firebasedatabase.app",
    messagingSenderId: "69157313368",
    appId: "1:69157313368:web:2ae3b57913536a4af8e32d",
    measurementId: "G-1QBYZKH67K"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
