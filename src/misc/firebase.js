import { Notification as Toast } from 'rsuite';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getMessaging, isSupported, onMessage } from 'firebase/messaging';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: "AIzaSyAy7FsozNwE_piB45eGmgPzQRd6myLLoO4",
  authDomain: "chat-wapp.firebaseapp.com",
  databaseURL: "https://chat-wapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-wapp",
  storageBucket: "chat-wapp.appspot.com",
  messagingSenderId: "1031232435056",
  appId: "1:1031232435056:web:cbe58304d43364dc00d5b5"
};

export const fcmVapidKey =
  'BHRcfnM6w28LTSP1FE2l4eC6ZJMexFKupqDLUBrk-tD4md3W2Jhxi8S8J0rbkXO459-REH-bnolseu7w8ERBF7M';

const app = initializeApp(config);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'asia-south1');

export const messaging = isSupported() ? getMessaging(app) : null;

if (messaging) {
  onMessage(messaging, ({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}
