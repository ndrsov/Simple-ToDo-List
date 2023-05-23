const listEl = document.getElementById('list');
const createBtnEl = document.getElementById('create');

let todos = [];

createBtnEl.addEventListener('click', createNewTodo);

function createNewTodo() {
  const item = {
    id: new Date().getTime(),
    text: '',
    complete: false,
  };

  todos.unshift(item);

  const { itemEl, inputEl } = createTodoEl(item);

  listEl.prepend(itemEl);

  inputEl.removeAttribute('disabled');
  inputEl.focus();

  //Save();
}
