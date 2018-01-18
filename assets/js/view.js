
function setTitleList(nameList)
{
    // console.log(ul_list.children.length);
    if(ul_list.children.length === 0)
    {
        // console.log('entro');
        let h2_title = document.createElement('h2');
        h2_title.textContent = nameList;
        // h2_title.setAttribute('contenteditable', 'true');
        h2_title.classList.add('h2-title');
        
        ul_list.appendChild(h2_title);
    }
}

function setTask(newTask)
{
    let li_task = document.createElement('li');

    let h3_name = document.createElement('h3');
    h3_name.textContent = newTask.name;

    let p_description = document.createElement('p');
    p_description.textContent = newTask.description;

    let input_check = document.createElement('input');
    input_check.type = 'checkbox';

    li_task.appendChild(h3_name);
    li_task.appendChild(input_check);
    li_task.appendChild(p_description);

    li_task.classList.add('li-task')
    
    ul_list.appendChild(li_task);
}
