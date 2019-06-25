const urls = require("../assets/firebase.json"); //https://stackoverflow.com/a/51840858

export const environment = {
  production: false,
  firebase: {
    apiKey: urls.apiKey,
    authDomain: urls.authDomain,
    databaseURL: urls.databaseURL,
    projectId: urls.projectId,
    storageBucket: urls.storageBucket,
    messagingSenderId: urls.messagingSenderId,
    appId: urls.appId
  },
};