var todos = [];

var input = prompt ("What would you like to do?")


while(input!== "quit"){

	if (input === "list"){
		listTodos();
	} 

	else if (input === "new") {
		AddTodo();
	}

	else if (input === "delete"){
		deleteTodo();
	}

	input = prompt ("What would you like to do?");
}

console.log("Ok, user quit the App");


function listTodos(){
	consol.log("**********");
	todos.forEach(function(todo, i){
		consol.log(i + ": " + todo);
		});
	consol.log("**********");
}

function AddTodo(){
	var newTodo = promt("Enter new todo");
	todos.push(newTodo);
	console.log("Added todo");
}

function deleteTodo(){
	var index = prompt("Enter index to delete");
	todos.splice(index,1);
	console.log("delted todo");
}