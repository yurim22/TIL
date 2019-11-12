import React from 'react';
import './TodoItem.css';

const TodoItem = ({checked, text, id}) => (

  <div className={`TodoItem ${checked && 'active'}`}>
    <div className="check">&#10004;</div>
    <div className="text">{text}</div>
    <div className="remove">[지우기]</div>
  </div>

);

export default TodoItem;

