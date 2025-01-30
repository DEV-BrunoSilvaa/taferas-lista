import { useState } from 'react';
import Todo from "./Componentes/Todo";
import TodoForm from './Componentes/TodoForm';
import Search from './Componentes/Searche';
import './App.css';
import Filter from './Componentes/Filter';
import Rodape from './rodape';

function App() {

  const[ todos, setTodos ] = useState([
    {
      id: 1,
      Text: "Criar Funcionalidade X No Sistema",
      category:"trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      Text: "ir Para Academia",
      category:"Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      Text: "Estudar React",
      category:"Estudos",
      isCompleted: false,
    },
  ]);


  //funcionalidade do botao pesquisar
  const [search, setSaerch] = useState("")
  const addTodo = (text, category) => {

    const newTodo = [
      ...todos, 
      {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
  ];
  setTodos(newTodo);
  };
  //remove as tarefas 

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo =>
    todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }


  // confirma as tarefas feitas 
  const completeTudo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }
  
  return (
    <div className="app">
      <h1>Lista De Tarefas</h1>
      <Search search={search} setSaerch={setSaerch}/>
      <Filter />
      
    <div className='todo-list'>
      {todos
      .filter((todo) =>
        (todo.Text?.toLowerCase() || "").includes((search?.toLowerCase() || ""))
        )
        .map((todo) => (
        <Todo 
        key={todo.id} 
                todo={todo} 
        removeTodo={removeTodo} 
        completeTudo={completeTudo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo} />
    <div>
      <Rodape />
    </div>
    </div>
    
  );
}

export default App;
