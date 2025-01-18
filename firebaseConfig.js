import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAQmR1_FLQeKksuKCp7ApZ8wd-SnzPzsX8',
  authDomain: 'outfit-maven-app.firebaseapp.com',
  databaseURL: 'https://outfit-maven-app.firebaseio.com',
  projectId: 'outfit-maven-app',
  storageBucket: 'outfit-maven-app.firebasestorage.app',
  appId: '1:300461408631:android:746ee22e3f0061b4c9e172',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
