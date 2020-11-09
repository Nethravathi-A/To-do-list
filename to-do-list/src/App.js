import React, {Component} from 'react';
import ToDos from './component/ToDos';
import AddTodo from './component/AddTodo';

import './App.css';

class App extends Component{
  state={
    todos:[
        //.{id:1,content:"do homework"},
        //{id:2,content:"go to dinner"}

      
    ],
    message:'',
    classMessage:'',
    
  }
  deleteToDo=(id)=>{
    //console.log('delete todo',id);
    const todos = this.state.todos.filter
    (todo=>{
      return todo.id!==id;
    })
    this.setState({
      todos:todos,
      message:"Task has been removed Successfully",
      classMessage:"danger"
    })
    setTimeout(()=>{
      this.setState({
        message:''
      })
    }, 2000)
  }
  addTodo=(todo)=>{
    todo.id=Math.random();
    const todos=[...this.state.todos,
      todo];
      this.setState({
        todos:todos,
        message:"New todo has been added successfully",
        classMessage:"Success"
      })
      setTimeout(()=>{
        this.setState({
            message:''
        })
      }, 2000)
    //console.log('addtodo from app.js')
  }
 
  render(){
  const message =this.state.message!=='' ? (
    <div className={`message $
    {this.state.classMessage}`}>
        <p>{this.state.message}</p>
    </div>
  ):null;
    return(
      <div className="app">
        <h1> My Todos App</h1>
        {message}
        <AddTodo addTodo={this.addTodo}/>
      
        <span className="to-do">TO DO</span> 
        <span className="done">DONE</span>
        <ToDos deleteToDo={this.deleteToDo} 
        todos={this.state.todos}/>
      </div>
    )
  }
}
export default App;