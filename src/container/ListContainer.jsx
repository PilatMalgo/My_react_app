import React from 'react';
import TodoList from '../component/TodoList';
import FormContainer from '../container/FormContainer';
import Todo from '../component/TodoList';
import axios from 'axios';
window.id = 0;
class ListContainer extends React.Component {

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
	
		try {
			  fetch('http://195.181.210.249:3000/todo/'+id, {
			  method: 'DELETE',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
				id: id,
			  })
			})
		  } catch (error) {
			console.error(error)
		  }	
	
    // Update state with filter
    this.setState({data: remainder});
  }
  
    render(){
        return(
			<div>
			<FormContainer addTodo={this.addTodo.bind(this)} />
			
			<TodoList
			  todos={this.state.data} 
			  remove={this.handleRemove.bind(this)}
			/>
			</div>
        )
    }







}
export default ListContainer;