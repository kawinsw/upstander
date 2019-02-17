/*
see:
https://docs.expo.io/versions/latest/guides/using-firebase/
*/
//TODO: complete this class.

import * as firebase from 'firebase';
export default class firebaseClient {
    
    initializeApp = (fbconfig) =>{

        const firebaseConfig = fbconfig? fbconfig: {
            apiKey: "AIzaSyAXJg0mvp2ZkommGE63YVxDcKk_7TqkFok",
            authDomain: "treehacks-2c696.firebaseapp.com",
            databaseURL: "https://treehacks-2c696.firebaseio.com/"
          };
          
        firebase.initializeApp(firebaseConfig);

    }
    listenToUpdates = (callback)=>{
        firebase.database().ref('accident/').on('value', (snapshot) => {
            if (snapshot.val() != null) {
                callback();
            }
        });

    }
}