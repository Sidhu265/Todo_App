import { useState } from 'react'
import { useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [todos,setTodos] = useState([]);
  
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos');
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
  

  return (
    <div>
      <div style={{fontSize:'40px',color:'black'}}>TODO LIST</div>
      <div>_______________________________________</div>
      <div>Add your todos here...</div>
      <div className="flex-container">
        <div className="flex-child"><CreateTodo /></div>
        <div className="flex-child scroller"><Todos todos={todos} /></div>
      </div>
    </div>
  )
}

export default App
