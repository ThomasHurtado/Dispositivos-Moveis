// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDrDrL4fQcL44hzRczkAoSg43WHeMs6CjE",
	authDomain: "dispositivos-moveis-93b1b.firebaseapp.com",
	projectId: "dispositivos-moveis-93b1b",
	storageBucket: "dispositivos-moveis-93b1b.firebasestorage.app",
	messagingSenderId: "162234298610",
	appId: "1:162234298610:web:414cb640208efbd910a06b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
