import { storage } from './initService.js';
import { ref as storageRef, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const uploadImage = (file, progressCallback, errorCallback, successCallback) => {
  if (!file) return;

  const sRef = storageRef(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(sRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      progressCallback(progress);
    },
    (error) => {
      errorCallback(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        successCallback(downloadURL);
      });
    }
  );
};

export default uploadImage;
