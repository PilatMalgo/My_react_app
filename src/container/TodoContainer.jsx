import React from 'react';

class TodoContainer extends React.{
    constructor(props){   //funkcja zerujaca dane
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
          data: []
        }
      }
      // Add todo handler
      addTodo(val){
        // Assemble data
        const todo = {title: val, id: window.id++}
        // Update data
        this.state.data.push(todo);
        // Update state
        this.setState({data: this.state.data});
      }
      // Handle remove
      handleRemove(id){
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
          if(todo.id !== id) return todo;
        });
        // Update state with filter
        this.setState({data: remainder});
      }
}