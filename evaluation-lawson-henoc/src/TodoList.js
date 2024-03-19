
import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title: newTodoTitle,
        completed: false,
      };

      setNewTodoTitle('');
      onEdit(newTodo.id, newTodo.title); 
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <input
          type="text"
          placeholder="Nouvelle tâche..."
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Ajouter</button>
      </div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
