import React, { useState } from 'react';
import Toggle from './Toggle';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const wordList = ['React', 'JavaScript', 'HTML', 'CSS', 'chat', 'chien', 'maison', 'ordinateur', 'programmation', 'plage', 'montagne', 'soleil', 'lune', 'etoile', 'aventure', 'livre', 'musique', 'film', 'voyage'];

  const [todos, setTodos] = useState([
    { id: 1, title: 'Faire les courses', completed: false },
    { id: 2, title: 'Apprendre React', completed: true },
    { id: 3, title: 'Travailler sur le projet', completed: false },
  ]);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newTitle) => {
    const existingTodo = todos.find((todo) => todo.id === id);

    if (existingTodo) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        )
      );
    } else {
      setTodos((prevTodos) => [...prevTodos, { id, title: newTitle, completed: false }]);
    }
  };

  return (
    <div>
      <h1>Rechercher un mot</h1>
      <Toggle words={wordList} />
      
      <h1>Liste de tâches</h1>
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;
