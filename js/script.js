window.onload = function(){
	document.getElementById("boton").addEventListener("click", agregar);
}

function agregar(){
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";

	//contenedor de tareas
	var cont = document.getElementById("contenedor");

	//nodos elementos
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode("tareas");
	var elementoContenedor = document.createElement("span");

	//asignar padres a los nodos
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//creación checkbox e íconos con atributo y clases
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

	//asignar padres a nodos creados
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	//evento al hacer click para que elimine o agregue la clase tachado al elementoContenedor
	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	})

	//remover ícono basura al hacer click sobre él
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})

	//función click para el corazón
	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
	});

	//valida que textarea no esté vacía
	if(tareas == null || tareas.length == 0){
		alert("¡Error! Debe ingresar tarea");
		return false;
	}
}







