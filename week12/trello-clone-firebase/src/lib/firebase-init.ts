// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  deleteDoc, 
  collection,
  addDoc,
  setDoc 
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD0UpUUHTfhJj9BLagOQz2DQAk70dBMXHQ",

  authDomain: "cards-196c4.firebaseapp.com",

  projectId: "cards-196c4",

  storageBucket: "cards-196c4.appspot.com",

  messagingSenderId: "138076479628",

  appId: "1:138076479628:web:b25cc8d72c3f33b2eb5ba9"

};


// Initialize Firebase

export const fireStoreApp = initializeApp(firebaseConfig);


// get data from firestore
export const fireStoreDb = getFirestore(fireStoreApp);
export const addTodoFirebase = async(text: string, todoId: string) => {
  const cardsSnapShot = collection(fireStoreDb, `lists/${todoId}/cards`);
  
  const docRef = await addDoc(cardsSnapShot, {
    title: text,
    description: '',
    comments: []
    }
  );
  return docRef.id;
}

export const updateTodoFirebase = async(todoListId: string, id: string, attribute: string, value: string) => {
  console.log(todoListId, id, attribute, value);
  if(attribute === 'title'){
    const answer = await setDoc(doc(fireStoreDb, `lists/${todoListId}/cards`, id), {
      title: value
    }, { merge: true });
  }else{
    const answer = await setDoc(doc(fireStoreDb, `lists/${todoListId}/cards`, id), {
      description: value
    }, { merge: true });
  }
  
}


export const deleteTodoListFirebase = async(id: string) => {
  await deleteDoc(doc(fireStoreDb, "lists", id));
}

export const deleteCardFromFirebase = async(todoListId: string, id: string) => {
  await deleteDoc(doc(fireStoreDb, `lists/${todoListId}/cards`, id));
}