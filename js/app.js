const { createApp } = Vue

  createApp({
    data() {
      return {
        todos:[
            {
                text: 'fare la spesa',
                done: false,
            },

            {
                text: 'andare in palestra',
                done: true,
            },

            {
                text: 'petinare il gato',
                done: true,
            }, 

            {
                text: 'passeggiata con amante',
                done: false,
            },

            {
                text: 'aperitivo con fidanzata',
                done: true,
            },

            {
                text: 'cenare con trump',
                done: false,
            }
        ],

        newTodo: '',

      }
    },

    methods: {
       removeTodo(todo, i){
        this.todos.splice(i, 1)
       },

       fatto(todo){
        if(todo.done === false){
            todo.done = true
        } else {
            todo.done = false
        }
       },

       addTodo(){
        if(this.newTodo !== ''){
            this.newTodo = {
                text: this.newTodo,
                done: false
            };
            this.todos.push(this.newTodo);
            this.newTodo='';
        } else {
            alert("scrivi una task")
        }
       }

    }

  }).mount('#app')