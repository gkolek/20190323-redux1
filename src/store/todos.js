const ADD_TODO= 'ADD_TODO'
const DELETE_TODO = 'DELETE-TODO'
let id = 0

export const add = (title)=>({
    type: ADD_TODO,
    text: title

})
export const del = ()=>({
    type: DELETE_TODO
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

        // case DELETE_TODO:
        
        //     return

        default:
            return state
    }
}

export  default todosReducer