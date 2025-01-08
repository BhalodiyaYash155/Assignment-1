let task = [];

const addTask = (title, status, priority) =>{
    task.push({title,status,priority});
}

const filterByStatus = (status) =>{
    return task.filter((task) => task.status === status);
}

const highPriorityTask = () =>{
    return task.find((task) => task.priority === 5);
}

const taskTitleWithStatus = () =>{
    return task.map((task) => `Task: ${task.title}, Status: ${task.status}`);
}

const allTasks = () =>{
    console.log("All Tasks:\n");
    task.forEach((task, index) =>{
        console.log(`Task: ${index + 1}:\n` + `Title: ${task.title}\n` + `Status: ${task.status}\n` + `Priority: ${task.priority}\n`);
    })
}

addTask("Learn JavaScript", "Pending", 5);
addTask("Play Valorant", "Completed", 3);
addTask("Watch Movie", "Pending", 2);
addTask("Go to Gym", "Completed", 4);

console.log("Filtered Tasks:");
console.log(filterByStatus("Completed"));
console.log();

console.log("High Priority Tasks:");
console.log(highPriorityTask());
console.log();

console.log("Tasks with title and status:");
console.log(taskTitleWithStatus());
console.log();

allTasks();