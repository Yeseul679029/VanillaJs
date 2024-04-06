const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input"); 아래와 같다
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    //toDoInput.value가 빈값이 된다고 해서 newTodo가 빈값이 되는건 아니다 우리가 하는건 input.value를 새로운 변수에 복사하는 것
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* 화살표 함수로 사용하는것과 똑같다.더 짧게 쓰려면 화살표함수 사용
function sayHello(item){
    console.log("this is the turn of", item);
}*/

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello); 아래 화살표함수와 같음 
    parsedToDos.forEach(paintToDo);
}


function sexyFilter(){

}
[1, 2, 3, 4].filter(sexyFilter)

