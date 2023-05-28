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

  Save();
}

{
  /* <div class="item">
            <input type="checkbox" />
            <input type="text" value="ToDo content goes here" disabled />
            <div class="actions">
              <button class="material-icons">edit</button>
              <button class="material-icons remove-btn">remove_circle</button>
            </div>
          </div> */
}

function createTodoEl(item) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('add');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = item.complete;

  if (item.complete) {
    itemEl.classList.add('complete');
  }

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = item.text;
  inputEl.setAttribute('disabled', '');

  const actionsEl = document.createElement('div');
  actionsEl.classList.add('actions');

  const editBtnEl = document.createElement('button');
  editBtnEl.classList.add('material-icons');
  editBtnEl.innerText = 'edit';

  const removeBtnEl = document.createElement('button');
  removeBtnEl.classList.add('material-icons', 'remove-btn');
  removeBtnEl.innerText = 'remove_circle';

  actionsEl.append(editBtnEl);
  actionsEl.append(removeBtnEl);

  itemEl.append(checkbox);
  itemEl.append(inputEl);
  itemEl.append(actionsEl);

  // Events

  checkbox.addEventListener('change', () => {
    item.complete = checkbox.checked;

    if (item.complete) {
      itemEl.classList.add('complete');
    } else {
      itemEl.classList.remove('complete');
    }

    Save();
  });

  inputEl.addEventListener('input', () => {
    item.text = inputEl.value;
  });
}

function Save() {
  // Save todos
}
