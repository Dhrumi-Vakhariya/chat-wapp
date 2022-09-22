/* eslint-disable no-undef */
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyAy7FsozNwE_piB45eGmgPzQRd6myLLoO4',
  authDomain: 'chat-wapp.firebaseapp.com',
  databaseURL:
    'https://chat-wapp-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-wapp',
  storageBucket: 'chat-wapp.appspot.com',
  messagingSenderId: '1031232435056',
  appId: '1:1031232435056:web:cbe58304d43364dc00d5b5',
});

firebase.messaging();
