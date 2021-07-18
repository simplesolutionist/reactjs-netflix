import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';
const config = {
    apiKey: "AIzaSyDR2TufcxWncfJGaaC3IziT99elArLvnGY",
    authDomain: "netflix-35684.firebaseapp.com",
    projectId: "netflix-35684",
    storageBucket: "netflix-35684.appspot.com",
    messagingSenderId: "390922204942",
    appId: "1:390922204942:web:fe9420ae759a4e4edf095f"
  };
  
  const firebase = Firebase.initializeApp(config);
  // 2) when seeding the database you'll have to uncomment this!
  //seedDatabase(firebase);
  // 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
  

  export { firebase };