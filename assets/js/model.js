class Task {
    constructor(name = "Name of the task", description = 'Description')
    {
        this.name = name;
        this.description = description
        this.isCompleted = false;
    }

    Completed()
    {
        if(this.isCompleted)
            this.isCompleted = false;
        else
            this.isCompleted = true;
    }

    Edit(name, description)
    {
        this.name = name;
        this.description = description;
    }
}

class List_tasks {
    constructor(name = "Name of the list")
    {
        this.name = name;
        this.array_task = new Array();
    }

    addTask(newTask)
    {
        this.array_task.push(newTask);
    }

    removeTask(indice)
    {
        this.array_task.splice(indice, 1);
    }

    editNameList(name)
    {
        this.name = name;
    }
}
