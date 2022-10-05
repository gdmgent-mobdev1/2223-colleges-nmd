/**
 * * The Storage API
 * */

/**
 * Localstorage
 *  
 */

localStorage.setItem("hello", "world");
console.log(localStorage.getItem("hello"));
localStorage.removeItem('hello');

/** 
 * SessionStorage
 * 
 * */ 
sessionStorage.setItem("Hello", "World");

const fruit = [
  { id: 1, name: "Apple"},
  { id: 2, name: "Pear"},
  { id: 3, name: "Ananas"}
]

const initFruit = () => localStorage.setItem('fruit', JSON.stringify(fruit));

const changeFruit = (id, newName) => {
  // get the array
  const fruit = localStorage.getItem('fruit');
  // validate
  if(!fruit) return
  // parse to JSON
  const parsedFruit = JSON.parse(fruit);
  // create a new array with updates frui
  const updatedArray = parsedFruit.map(f => f.id === id ? { ...f, name: newName} : f);

  // set updated array
  localStorage.setItem('fruit', JSON.stringify(updatedArray));
}

initFruit();

changeFruit(3, "pineapple");