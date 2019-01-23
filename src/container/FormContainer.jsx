import React from 'react';

class FormContainer extends React.Component{
    constructor(){
        super(); 
        this.state={
            todo:'',
        }

    }
    submit=(event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo:'',
        })
    }    
    handleChange=(event)=>{
        
        this.setState({
            todo:event.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.submit.bind(this)}>
                <input name="cokolwiek" value={this.state.todo} onChange={this.handleChange} />
                <input type="submit" value="add" />

            </form>

        )

    }

}
export default FormContainer;