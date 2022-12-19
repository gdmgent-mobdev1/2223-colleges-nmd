/* eslint-disable no-new */
import { TodoList } from './Components';
import { root } from './Lib';
import localstorage from './Lib/localStorage';
// -------------main------------

const addTodoListInput = document.getElementById('addTodoListInput') as HTMLInputElement;
const addTodoListButton = document.getElementById('addTodoListButton') as HTMLElement;

addTodoListButton.addEventListener('click', () => {
  if (addTodoListInput.value.trim() !== '') {
    new TodoList(root, addTodoListInput.value);
    addTodoListInput.value = '';
  }
});

const appData = window.localStorage.getItem('cards-appData');

const todoList1 = new TodoList(root);
if (todoList1.input != null) {
  todoList1.input.value = 'new option';
}
// todoList1.addToDo();
localstorage();
