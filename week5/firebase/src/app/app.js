// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, addDoc, doc, deleteDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyANEEkYE0n2fmQU0QVxLjzyVBEQVYWH6Ps",
  authDomain: "fir-demo-1-92327.firebaseapp.com",
  projectId: "fir-demo-1-92327",
  storageBucket: "fir-demo-1-92327.appspot.com",
  messagingSenderId: "40287962017",
  appId: "1:40287962017:web:7a2c26d378a52cdfce41e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const collectionRef = collection(db, 'owl-statues');

getDocs(collectionRef)
    .then((snapshot) => {
        let owlStatues = [];
        snapshot.docs.forEach((doc) => {
            owlStatues.push({...doc.data(), id: doc.id});
        })
        console.log(owlStatues);
    })
    .catch(err => {
        console.log(err.message);
    });
    
// adding docs
const addStatueForm = document.querySelector('.add')
addStatueForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addDoc(collectionRef, {
    species: addStatueForm.species.value,
    "production-year": addStatueForm.productionYear.value,
  }).then(() => {
    addStatueForm.reset();
})
})

// methode 2: volgens documentatie
// addStatueForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   await addDoc(collectionRef, {
//     species: addStatueForm.species.value,
//     "production-year": addStatueForm.productionYear.value,
//   })
//   addStatueForm.reset();
// })


// deleting docs
const deleteStatueForm = document.querySelector('.delete');
console.log(deleteStatueForm.id);
deleteStatueForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const docRef = doc(db, 'owl-statues', deleteStatueForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteStatueForm.reset()
    })
})

// methode 2
// deleteStatueForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   await deleteDoc(doc(db, 'owl-statues', deleteStatueForm.id.value));
//   deleteStatueForm.reset()
// })