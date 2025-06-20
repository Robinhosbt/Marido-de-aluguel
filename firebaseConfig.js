// firebaseConfig.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrZC9HN53F8CVqt6LIF461O9ShBrD99Dc",
  authDomain: "meu-cervico.firebaseapp.com",
  projectId: "meu-cervico",
  storageBucket: "meu-cervico.appspot.com", // ✅ corrigido: .appspot.com (não .firebasestorage.app)
  messagingSenderId: "693012752283",
  appId: "1:693012752283:web:e78849d055f638b675633e"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

