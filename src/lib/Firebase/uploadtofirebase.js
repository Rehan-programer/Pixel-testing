// lib/uploadToFirebase.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const uploadImageToFirebase = async (file, folder = "properties") => {
  const fileRef = ref(storage, `${folder}/${Date.now()}-${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};
