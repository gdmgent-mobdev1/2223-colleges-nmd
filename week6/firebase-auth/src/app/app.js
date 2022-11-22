// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut

 } from "firebase/auth";

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

// init authentication
const auth = getAuth();

const signupForm = document.querySelector(".signup");
const loginForm = document.querySelector(".login");
const logoutButton = document.querySelector(".logout");

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
  .then(cred => {
    console.log('user created:', cred.user);
    signupForm.reset();
  })
  .catch(err => {
    console.log(err.message);
  })
})

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
  .then(cred => {
    console.log('user logged in:', cred.user);
    loginForm.reset();
  })
  .catch(err => {
    console.log(err.message);
  })
})

logoutButton.addEventListener('click', (e) => {
  signOut(auth)
  .then(() => {
    console.log("user signed out");
  })
  .catch(err => {
    console.log(err.message);
  });
});


