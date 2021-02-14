import todosArrayofObjects from "../todos.json";
import { CLEAR_COMPLETED_TODOS, HANDLE_CHECKED, HANDLE_REMOVE_TODO, HANDLE_ADD_TODO } from "../actions/todoActions"

const initialState = {todos: todosArrayofObjects}
function rootReducer(state = initialState, action){
    
    switch(action.type){
        case CLEAR_COMPLETED_TODOS:
            return({
                ...state,
                todos : state.todos
                        .filter(todo => 
                            todo.completed === false)
            })

        case HANDLE_CHECKED:
            //Working on it
            const newTodos = state.todos.map(todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return({
                ...state,
                todos: newTodos
            })

        case HANDLE_REMOVE_TODO:
            return({
                ...state,
                todos : state.todos
                        .filter(todo => 
                            todo.id !== action.payload)
            })

        case HANDLE_ADD_TODO:
            return({
                ...state,
                todos: [...state.todos, action.payload]
            })

            default: 
                return state
    }
}

export default rootReducer