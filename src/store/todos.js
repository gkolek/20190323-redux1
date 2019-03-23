let id = 0

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE-TODO'

export const add = (myText) => ({
    type: ADD_TODO,
    text: myText
})
export const toggle = todoId => ({
    type: TOGGLE_TODO,
    id: todoId
})
export const del = todoId => ({
    type: DELETE_TODO,
    id: todoId
})


const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            id++
            const newTodo = {
                text: action.text,
                isCompleted: false,
                id
            }
            return [
                ...state,
                newTodo
            ]

        case TOGGLE_TODO:
            return state.map(todo => {
                const isTheSameId = (todo.id === action.id)
                return isTheSameId
                    ? {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                    : todo
            })

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

export default todosReducer