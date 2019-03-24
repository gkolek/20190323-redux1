import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from './store/todos'

const TodoList = props => {
    const handleKeyPress = event => {
        if (event.which === 13) {
            alert('add todo "' + event.target.value + '" by pressing enter')
            const value = event.target.value
            props._handleTodoAdd(value)
            event.target.value = ""
        }
    }
    console.log('TodoList props: ', props);
    return (
        <div>
            <input onKeyPress={handleKeyPress} />
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

const mapDispatchToProps = dispatch => ({
    _handleTodoAdd: (todoText) => dispatch(addTodo(todoText))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
