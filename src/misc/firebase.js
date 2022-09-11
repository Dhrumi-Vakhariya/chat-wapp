// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAy7FsozNwE_piB45eGmgPzQRd6myLLoO4',
  authDomain: 'chat-wapp.firebaseapp.com',
  databaseURL:
    'https://chat-wapp-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-wapp',
  storageBucket: 'chat-wapp.appspot.com',
  messagingSenderId: '1031232435056',
  appId: '1:1031232435056:web:cbe58304d43364dc00d5b5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
