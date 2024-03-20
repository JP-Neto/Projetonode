import { signOut } from 'firebase/auth';
import { auth, database } from './initService.js';
import { ref, onValue, update } from 'firebase/database';

export const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    const user = auth.currentUser;

    if (!user) {
      reject(new Error('Usuário não autenticado'));
    }

    // Verificando se o usuário está autenticado com o provedor do Google
    if (user.providerData.find(provider => provider.providerId === 'google.com')) {
      // Usuário autenticado com o Google
      resolve({
        name: user.displayName,
        photoURL: user.photoURL
      });
    } else {
      // Usuário autenticado por e-mail/senha, busca informações no Realtime Database
      const userId = user.uid;
      const userRef = ref(database, 'users/' + userId);

      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log("Fetched user data:", userData); // Para depuração
          resolve({
            name: userData.username,
            photoURL: userData.photoURL
          });
        } else {
          reject(new Error('Usuário não encontrado'));
        }
      }, { onlyOnce: true });
    }
  });
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const updateUserPhotoURL = (newPhotoURL) => {
  return new Promise((resolve, reject) => {
    const user = auth.currentUser;

    if (!user) {
      reject(new Error('Usuário não autenticado'));
      return;
    }

    const userId = user.uid;
    const userRef = ref(database, 'users/' + userId);

    update(userRef, { photoURL: newPhotoURL })
      .then(() => {
        console.log("Photo URL updated successfully");
        resolve();
      })
      .catch((error) => {
        console.error("Error updating photo URL:", error);
        reject(error);
      });
  });
};
