/*
see:
https://docs.expo.io/versions/latest/guides/using-firebase/
*/
//TODO: complete this class.

import * as firebase from 'firebase';
export default class firebaseClient {
    
    initializeApp = (fbconfig) =>{

        const firebaseConfig = fbconfig? fbconfig: {
            apiKey: "<YOUR-API-KEY>",
            authDomain: "<YOUR-AUTH-DOMAIN>",
            databaseURL: "<YOUR-DATABASE-URL>",
            storageBucket: "<YOUR-STORAGE-BUCKET>"
          };
          
        firebase.initializeApp(firebaseConfig);

    }
    listenToUpdates = (callback)=>{
        firebase.database().ref('users/' + userId).on('value', (snapshot) => {
            //const highscore = snapshot.val().highscore;
            callback(snapshot);
            //console.log("New high score: " + highscore);
          });

    }
}