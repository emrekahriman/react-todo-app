export const initialState = {
    todos: [],
}



const reducer = (state, action) => {
    console.log(action)

    switch (action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case "REMOVE_TODO":
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            }
        case "COMPLATE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, isComplated: !todo.isComplated} : todo)
            }
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.todoId ? {...todo, content:action.payload.newValue} : todo)
            }
        default:
            return {
                ...state
            }
    }
}


export default reducer;