import React from 'react';

const TodoList = props => {
  console.log('TodoList props: ', props);
  return props.todos.map(todo => {
    return <div>
      {todo.text}
      <button type="button">X</button>
    </div>
  })
}

export default TodoList;