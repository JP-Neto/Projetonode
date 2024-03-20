import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBF27lTs7K54SAq31d5zCHrzpdLqeoTz04",
    authDomain: "autosytem.firebaseapp.com",
    databaseURL: "https://autosytem-default-rtdb.firebaseio.com",
    projectId: "autosytem",
    storageBucket: "autosytem.appspot.com",
    messagingSenderId: "13385916912",
    appId: "1:13385916912:web:18622fd628519ab612bd35"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, auth, database, storage }; 