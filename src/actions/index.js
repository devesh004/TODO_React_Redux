export const addTodo=(newTodo)=>{
    return {
        type:"ADD_TODO",
        newEntry:{
            id:Date.now(),
            newTodo:newTodo
        }
    }
}
export const deleteTodo=(id)=>{
    return {
        type:"DELETE_TODO",
        id:id
    }
}

export const clearTodo=()=>{
    return {
        type:"CLEAR_TODO"
    }
}