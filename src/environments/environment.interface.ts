export interface Environment {
  production: boolean;
  getUrl: string;
  phpUrl: string;
  pageTitle: string;
  baseHref: string;
  fireBase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    databaseURL: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
}
