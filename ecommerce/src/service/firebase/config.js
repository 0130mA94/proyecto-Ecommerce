
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyBgYLjuBJHLQF8XkbBPBPyxBBcSqLNQZ_Q",
    authDomain: "la-cueva-del-comic.firebaseapp.com",
    projectId: "la-cueva-del-comic",
    storageBucket: "la-cueva-del-comic.appspot.com",
    messagingSenderId: "134461429065",
    appId: "1:134461429065:web:93aa9eda72ba6484f3b698"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);