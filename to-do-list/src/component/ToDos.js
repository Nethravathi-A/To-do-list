import React from 'react';

const ToDos=({todos,deleteToDo})=> {
    //console.log(deleteToDo);//
    const todoList=todos.length ?(
        todos.map(todo =>{
            return(
                <div className="todos" key={todo.id}>
                    <div className="todo-wrap">
                        <p className="todo">{todo.content}</p>
                        <button onClick={()=>{deleteToDo(todo.id)}}>Remove</button>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="no-todo"> you have to todo left</p>
    ) 
    return(
        <div className="todos">
            {todoList}
        </div>
    )
}
export default ToDos;