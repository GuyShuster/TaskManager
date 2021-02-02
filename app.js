/*
* Description: A task managing app allowing to vue, add and search tasks
* Author: Guy Shuster
* Date: 02.02.2021
* */

const vueApp = new Vue({
    el: '#app',
    data: function () {
        return {
            tasks: [
                {
                    name: 'Task1',
                    description: 'Write something'
                },
                {
                    name: 'Task2',
                    description: 'Write something else'
                },
                {
                    name: 'Task3',
                    description: 'Write something beautiful'
                },
            ],
            searchTasksForm: {
                searchString: ''
            },
            newTaskForm: {
                taskName: '',
                taskDescription: ''
            },
        };
    },
    methods: {
        completeTask: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        },
        submitSearchForm: function () {
            const tasksFound = [];
            for (let task of this.tasks) {
                if (task.name.includes(this.searchTasksForm.searchString)) {
                    tasksFound.push(task);
                }
            }
            if (tasksFound.length === 0) {
                window.alert(`No tasks were found`)
            } else {
                let outputString = 'Found the following tasks:\n'
                for (let task of tasksFound) {
                    outputString += `Task Name: ${task.name}\nTask Description: ${task.description}\n`;
                }
                window.alert(outputString);
            }
        },
        submitNewTaskForm: function () {
            this.tasks.push({
                name: this.newTaskForm.taskName,
                description: this.newTaskForm.taskDescription
            });
        }

    }
});
