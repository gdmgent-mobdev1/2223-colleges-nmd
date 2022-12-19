// todo finish
import { TodoList } from '../Components';

function saveData(): void {
  window.localStorage.setItem('cards-appData', JSON.stringify(appData));
}
const appData: {
  todoLists: TodoList[]
  settings: {}
  currentBoard: number
  identifier: number
} = {
  todoLists: [],
  settings: {
    userName: 'User',
    dataPersistence: true,
  },
  currentBoard: 0, // The index of the currently open board.
  identifier: 0,
};

export function currentCards() {
  return appData.todoLists[appData.currentBoard].cardArray;
}

function currentBoard() {
  return appData.todoLists[appData.currentBoard];
}

const init = (): void => {
  const autoSaveInternalId = setInterval(() => {
    saveData();
  }, 5000);
};

export default init;
