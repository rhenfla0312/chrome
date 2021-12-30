const toDoForm = document.querySelector('#todo-form'); // form
const toDoList = document.querySelector('#todo-list'); // ul
const toDoInput = document.querySelector('#todo-form input'); // input

// class
toDoForm.classList.add("form");


// localstroge에 저장
// localstroge에는 문자열만 저장이 가능하다 
// json.stringify - array, object -> string (localstroge에 저장할때)
// json.parse - string -> array, object (저장한 localstroge를 가져올때)

// const 로 생성 후 업데이트를 위해 let으로 변경
let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// form event 로직
function handleToDoSubmit(e) {
  e.preventDefault();
  // value를 저장하고
  const newTodo = toDoInput.value;
  // 값을 비운다
  toDoInput.value = "";

  // 삭제할때 키로 구분하기 위해 obejct로 전달한다
  const newTodoObj = {
    text : newTodo,
    id : Date.now()
  }
  // newTodo를 넘기기 전에 toDos에 저장한다
  toDos.push(newTodoObj);
  // paintTodo function에 input value값 전달
  paintTodo(newTodoObj);
  saveToDos();
} 

// 삭제 기능
// 문제점 -> 모든 li는 같은 button을 가리키고 있다? -> 각각 button을 구분지어줄려면? -> event의 유용한 정보를 얻어온다 ex) event.target 살펴본다 target = 클릭된 html element 
// 해결 -> 버튼을 클릭할 때 event를 얻는다 -> event는 target을 준다 -> target은 button이다 -> button -> 부모를 갖고 있다 -> button의 부모에 접근한다 -> button의 부모는 결국 li가 된다 -> li 삭제

// filter - 예전 array에 작업하는게 아닌 새로운 array를 준다, array에서 뭔가를 삭제할 때, item을 지우는게 아니라 제외한다 = 이전 array는 유지된다, 새로운 array에 포함하고 싶다면 무조건 true를 리턴해야한다
// ex) [1,2,3,4].filter(function) -> function에 [1,2,3,4]을 하나씩 넣어서 실행한다, 그리고 function을 실행할때도 인자로 순서를 넣어서 실행한다
function deleteToDo(event) {
  const li = event.target.parentElement;
  // localstrage에 있는걸 삭제할려면 object로 만들어서 id같은걸 주면서 하고싶다 = 중복값이 있을수도있으니  
  // 1. 랜덤 아이디 만들기 -> Date.now() -> 현재 날짜를 밀리초로 주는 함수 
  // li.id는 string이기 때문에 parseInt로 number로 바꿔준다 -> 그래야 id값으로 작동해서 삭제가 된다
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  // delete -> localstrage update
  saveToDos()
}

// form input.value 받아서 span에 넣기
function paintTodo(newTodo) {
  const ul = document.querySelector('#todo-list'); // ul
  const li = document.createElement('li'); // li
  li.id = newTodo.id;
  const span = document.createElement('span'); // span
  const button = document.createElement('button') // button
  button.innerText = "삭제";
  
  button.addEventListener('click', deleteToDo)

  // class
  ul.classList.add('ul');
  button.classList.add('button');

  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
}

// form click event
toDoForm.addEventListener('submit', handleToDoSubmit);


// localstroge에 저장된 값을 가져온다
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  // localstroge에서 가져온 string -> js object, array로 변환해준다
  const parsedToDos = JSON.parse(savedToDos);
  // 문제점 - 위쪽의 toDos는 처음에 빈 값으로 시작해서 새로고침하면 이전의 값들이 사라지는 현상발생
  // 해결 - let으로 선언한 toDos에 parserToDos를 넣어서 전에 있던 toDo들을 복원한다
  toDos = parsedToDos; 
  // json.parse로 가져온 js에 array에 있는 각각의 item에 대해 foreach로 function을 실행한다
  parsedToDos.forEach(paintTodo);
}















