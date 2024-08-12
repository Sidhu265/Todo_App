import React from 'react';
export function Todos({todos}){
    return <div>
        {
            todos.map(function(todo){
                return <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <button onClick={()=>{
                        fetch(`http://localhost:3000/completed`,{
                            method: "PUT",
                            body:JSON.stringify({
                                id: todo._id,
                                completed: todo.completed
                            }),
                        headers:{
                            'Content-Type':'application/json',
                        }
                    }) .then(() => console.log('Request completed'))
                    .catch(error => console.log('Error:', error));  
                    }}>{todo.completed ? "Completed" : "Mark as Complete" }</button>
                    </div>
            })
        } 
    </div>
}