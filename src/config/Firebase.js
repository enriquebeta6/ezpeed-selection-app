import  * as firebase  from 'firebase';

class Firebase {
  static init(){
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAvCbKxfW2cN97KYoTgAtY7vGwJGqMx7tg",
        authDomain: "ezpeed-84b3d.firebaseapp.com",
        databaseURL: "https://ezpeed-84b3d.firebaseio.com",
        projectId: "ezpeed-84b3d",
        storageBucket: "ezpeed-84b3d.appspot.com",
      });
    }
  }
}

export default Firebase;