new Vue({
    el: "#app",
    data: {
        currentTask: '',
        tasks: [
            {
                text: "subscribe",
                isCompleted: false
            },
            {
                text: "walk",
                isCompleted: true
            },
            {
                text: "learn vue",
                isCompleted: true
            }
        ]
        
    },
    methods: {
            addTask: function() {
                this.tasks.push({
                    text: this.currentTask,
                    isCompleted: false
                })
                this.currentTask = '';
            },
            removeTask: function(taskText){
                this.tasks = this.tasks.filter(task =>
                     {return task.text !==taskText;
                })
            }
        }
})