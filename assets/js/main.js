const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');
const add = document.getElementById('add');
const form = document.getElementById('form');

function storeData() {
  localStorage.setItem('data', list.innerHTML);
  console.log(localStorage.getItem('data'));
}

function showTask() {
  list.innerHTML = localStorage.getItem('data');
  console.log(localStorage.getItem('data'));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let text = inputBox.value;
  if (text === '') {
    alert('You must enter something');
  } else {
    const newTodo = document.createElement('li');
    newTodo.innerText = text;
    let span = document.createElement('span');
    span.innerText = '\u00d7';
    newTodo.append(span);
    list.append(newTodo);
  }
  inputBox.value = '';
  storeData();
});

list.addEventListener(
  'click',
  e => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      storeData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      storeData();
    }
  },
  false
);

showTask();
