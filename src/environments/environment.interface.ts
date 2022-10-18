export interface Environment {
  production: boolean;
  pageTitle: string;
  dbKeyPrefix: string;
  fileStorage: (bucket: string, name: string) => string;
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
