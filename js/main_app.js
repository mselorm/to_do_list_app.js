//selectors
const selorm = $;
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")
// .
selorm(".test").click(function (e) {

     e.preventDefault();
    //  selorm("body").css("background", "black");
    selorm("body").addClass("change");
    console.log("change class")
 });           

 selorm(".test2").click(function (e) {

    e.preventDefault();
   //  selorm("body").css("background", "black");
   selorm("body").removeClass("change");
    console.log("changed class")
});           





selorm("test").toggleClass("change", "changed");



//eventlistners
todoButton.addEventListener('click', addTodo);
todolist.addEventListener('click', deleteCheck);



//functions
function addTodo(event){
    event.preventDefault();
    console.log("hellow to do lis")

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //  const newTodo = document.createElement("todo");
    // todoDiv.classList.add("todo");

     const newTodo = document.createElement('li')
     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);

     const completedButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fa fa-check"></i>';
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);

     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fa fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);

     //create the html
     todolist.appendChild(todoDiv)

     todoInput.value = "";

}

 function deleteCheck(e) {
     const item = e.target;
     console.log(item);
     if(item.classList[0] == 'trash-btn'){
            const todo = item.parentElement;
            todo.classList.add("fall");
           // #for css animation, todo.addEventListener('animationend', function ){
            todo.addEventListener('transitionend', function (){
            todo.remove();
            // this.delete("")
            
        });
     }

     //checkmark
        if(item.classList[0] === "complete-btn"){
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }

   }

