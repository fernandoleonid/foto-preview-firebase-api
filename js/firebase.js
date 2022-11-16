import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBN6kBf-_y_Zy4fzG_f7_BbDQ5BPeoehKg",
  authDomain: "teste-imagens-67c78.firebaseapp.com",
  projectId: "teste-imagens-67c78",
  storageBucket: "teste-imagens-67c78.appspot.com",
  messagingSenderId: "206172228910",
  appId: "1:206172228910:web:bc7275ba67d56728f93ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getStorage, ref, uploadBytes, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"

const uploadImage =  async (image, name) => {
    const storage = getStorage(app);

    const mountainsRef = ref(storage, `teste/${name}.jpg`);
    

    await uploadBytes(mountainsRef, image)

    return await getDownloadURL(mountainsRef)
   
} 

export {
  uploadImage
}