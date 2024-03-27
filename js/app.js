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
                text: 'cenare con trump',
                done: false,
            }
        ]
      }
    },

    methods: {
       removeTodo(todo, i){
        this.todos.splice(i, 1)
       } 
    }

  }).mount('#app')