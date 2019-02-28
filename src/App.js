import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import ListContainer from './container/ListContainer';
import Title from './component/Title';
import FormContainer from './container/FormContainer';
//import FormContainer from './container/TodoContainer';
import Todo from './component/TodoList';
import TodoList from './component/TodoList';
console.clear();

// Todo Id
window.id = 0;
class App extends Component{

  constructor(props){   //funkcja zerujaca dane
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
	
	axios.get('http://195.181.210.249:3000/todo')
      .then(res => {
		console.log(res.data);
		this.setState({data: res.data});
		//console.log(this.state);
     })
  }
  // Add todo handler
  addTodo(val){
    // Assemble data
		const todo = {title: val, id: window.id++}
	//send API POST
		  try {
			  fetch('http://195.181.210.249:3000/todo', {
			  method: 'POST',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
				title: todo.title,
				id: todo.id,
			  })
			})
		  } catch (error) {
			console.error(error)
		  }	
    // Update data
		this.state.data.push(todo);
    // Update state
		this.setState({data: this.state.data});
		console.log(this.state.data);
		
		

		
		
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
  render(){
    // Render JSX
    return (
			<div class="container">
			<div id="container" class="col-md-8 col-md-offset-2">
      <div class="list">
        <ListContainer />
        <Title />
        <FormContainer addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
      </div>
		</div>
		</div>
    );
  }
}

export default App;
