const toDoApp = {
    data(){
        return{
            tasks: [],
            newTask: {
                done: false
            }
        }
    },
    methods: {
        addNewTask: function() {
            if(this.newTask.name){
                this.tasks.push(this.newTask);
                this.newTask = {done:false};
                localStorage.setItem("tasks",JSON.stringify(this.tasks))
            }else{
                alert("fill the field");
            }
        },
        storeTasks(){
            localStorage.setItem("tasks",JSON.stringify(this.tasks))   //toggle the update method just when we want to, with the events we decide
        }
    },
    created() {
        this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.tasks;
    },
    /* Toggle the update method every time something change, so it's a little bit heavy 
    updated() {
        localStorage.setItem("tasks",JSON.stringify(this.tasks))   
    } 
    */
}

Vue.createApp(toDoApp).mount('#app');