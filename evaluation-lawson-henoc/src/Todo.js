// Todo.js
import React, { useState } from 'react';
import './Todo.css';

const Todo = ({ todo, onToggle, onDelete, onEdit }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    const newTitle = prompt('Nouveau titre :', todo.title);
    if (newTitle !== null && newTitle !== '') {
      onEdit(todo.id, newTitle);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Supprimer</button>
      <button onClick={handleEdit}>Modifier</button>
    </div>
  );
};

export default Todo;
