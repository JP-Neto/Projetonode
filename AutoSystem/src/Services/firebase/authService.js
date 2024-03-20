import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, getRedirectResult, updateProfile } from 'firebase/auth';
import { set, ref } from 'firebase/database';
import { auth, database } from './initService.js';

export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const defaultPhotoURL = 'https://th.bing.com/th/id/OIP.vatIy97XtiV6oeJ-OQwmAwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7';
    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: defaultPhotoURL
    });
    const userId = userCredential.user.uid;
    await set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      photoURL: defaultPhotoURL
    });
  } catch (error) {
    throw error;
  }
};

export const loginUserWithEmailAndPassword = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const loginUserWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
      // O redirecionamento e o resultado do login com o Google são tratados no useEffect acima
    } catch (error) {
      // Trata erros que podem ocorrer durante a tentativa de login com o Google
      throw(error.message);
    }
  };
  export const checkRedirectResult = async (navigate) => {
    try {
      const result = await getRedirectResult(auth);
      if (result.user) {
        const { displayName, email, photoURL, uid } = result.user;
        await set(ref(database, 'users/' + uid), {
          username: displayName,
          email: email,
          photoURL: photoURL
        });
        navigate('/dashboard');
      }
    } catch (error) {
      throw error;
    }
  };