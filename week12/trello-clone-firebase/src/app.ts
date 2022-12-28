/* eslint-disable no-new */
import { Card, TodoList } from './Components';
import { root } from './Lib';

// import firestore
import { fireStoreApp } from './lib/firebase-init';
import {
  getFirestore, collection, getDocs, onSnapshot, addDoc
} from "firebase/firestore";
// import localstorage from './Lib/localStorage';
// -------------main------------
const addTodoListInput = document.getElementById('addTodoListInput') as HTMLInputElement;
const addTodoListButton = document.getElementById('addTodoListButton') as HTMLElement;

const addTodoListFirebase = async (title: string) => {

  const docRef = await addDoc(colRef, {
    title: title,
  });
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
}

addTodoListButton.addEventListener('click', async() => {
  if (addTodoListInput.value.trim() !== '') {
    const id = await addTodoListFirebase(addTodoListInput.value);
    // new TodoList(root, addTodoListInput.value, id);
    
    addTodoListInput.value = '';
  }
});

const getCards = async (id: string) => {
  const cardsSnapShot = collection(db, `lists/${id}/cards`);
  const qSnap = await getDocs(cardsSnapShot);
  return qSnap.docs.map(d => ({id: d.id, ...d.data()}));
}

const createTodoList = ({id, cards, title}: { id: string; cards: {id: string}[], title: string} )  => {
  let newList: TodoList = new TodoList(root, title, id);
  
  cards.forEach((card) => {
          new Card(title, newList.div as HTMLElement, newList);
          // newList.addToDo();
        }
    )
}

// get data from firestore
const db = getFirestore(fireStoreApp);

// select collection
// We willen nu referen naar onze collectie `owl-statues`
const colRef = collection(db, 'lists');
// get data
onSnapshot(colRef, (snapshot) => {
  snapshot.docChanges().forEach(async (change) => {
    if (change.type === "added") {
      // snapshot.docs.forEach(async (doc) => {
      //   addTodoListInput.value = '';
        const cards = await getCards(change.doc.id);
        const id = change.doc.id;
        const title = change.doc.data().title;
        createTodoList({title, id: id,  cards, ...change.doc.data() });
      // });
    }
    if (change.type === "modified") {
        // rerendering
    }
    if (change.type === "removed") {
        // removing
    }
  });

  // document.querySelector('#app')!.innerHTML = '';
  
})
// const snapshot =  await getDocs(colRef);


// lists.forEach((listElement) => {
//   console.log(listElement)
  
//   // listElement.cards.forEach(
//   //   (card) => {
//   //     // newList.addToDo(card.)
//   //   }
//   // )

// });





