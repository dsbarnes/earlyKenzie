export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS"
export const HANDLE_CHECKED = "HANDLE_COMPLETED"
export const HANDLE_REMOVE_TODO = "HANDLE_REMOVE_TODO"
export const HANDLE_ADD_TODO = "HANDLE_ADD_TODO"

//Logic goes here

export const clearCompletedTodos = () => {
    return({
        type: CLEAR_COMPLETED_TODOS,
        //payload: 
    })
}

export const handleCheck = (id) => {
    
    return({
        type: HANDLE_CHECKED,
        payload: id,
    })
}

export const handleRemoveTodo = (id) => {
    return({
        type: HANDLE_REMOVE_TODO,
        payload: id
    })
}

export const handleAddTodo = (newTodo) => {
    return({
        type: HANDLE_ADD_TODO,
        payload : newTodo,
    })
}