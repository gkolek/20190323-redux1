import React from 'react';
import { connect } from 'react-redux'

const TodoList = props => {
  console.log('TodoList props: ', props);
  return (
    <div>
      <input />
      {
        props._todos
          ? props._todos.map(todo => {
            return <div key={todo.id}>
              {todo.text}
              <button type="button">X</button>
            </div>
          })
          : <div>No todos on your list yet</div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
    _todos: state.todos
})


export default connect(mapStateToProps)(TodoList);
