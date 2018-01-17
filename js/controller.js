'use strict';

var input_task = document.getElementById("input-new-task");
var ul_list = document.getElementById('ul-list');
var list = new List_tasks();

function addToList(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        var newTask = new Task(input_task.value);

        setTitleList(list.name);

        list.addTask(newTask);
        setTask(newTask);

        input_task.value = '';
    }
}

function edditToList(e) {
    e.preventDefault();
    e.target.setAttribute('contenteditable', 'true');
    ul_list.removeEventListener('dblclick', edditToList);

    /*Valida que dentro la edicion al precionar enter no se capture
     *y ademas que se salga del foco terminando la edicion   */
    e.target.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            e.target.setAttribute('contenteditable', 'false');
            e.target.blur();
        }
    });

    //Cuando sale del foco guardara los cambios
    e.target.addEventListener('blur', function a() {
        e.target.removeEventListener('blur', a);
        e.target.setAttribute('contenteditable', 'false');

        //Valida si es igual al titulo que no esta encerrado en un li
        if (ul_list.children[0] === e.path[0]) {
            list.editNameList(ul_list.children[0].textContent); //se cambia el titulo dentro de la data
        } else //en dado caso que no cambia el path donde estan los li
            {
                for (var i in ul_list.children) {
                    if (ul_list.children[i] === e.path[1]) {
                        //es i-1 porque el index 0 de list es un 'li' a diferencia del 'ul' que es el titulo h2
                        list.list_task[i - 1].name = ul_list.children[i].children[0].textContent;
                        list.list_task[i - 1].description = ul_list.children[i].children[1].textContent;
                    }
                }
            }
        ul_list.addEventListener('dblclick', edditToList);
    });
}

input_task.addEventListener('keyup', addToList);
ul_list.addEventListener('dblclick', edditToList);