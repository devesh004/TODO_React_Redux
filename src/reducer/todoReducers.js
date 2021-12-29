const intialState={
    list:[]
}
const todoReducers=(state=intialState,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const {newTodo,id}=action.newEntry;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        newTodo:newTodo
                    }
                ]
            }
        case "DELETE_TODO":
            const newList=state.list.filter((ele)=>ele.id!==action.id)
            return {
                ...state,
                list:newList
            }
        case "CLEAR_TODO":
            return {
                ...state,
                list:[]
            }
        default:
            return state  

    }
}

export default todoReducers;