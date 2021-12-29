import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import './todo.css'
import { addTodo,deleteTodo,clearTodo } from "../actions";
const Todo=()=>{
  const [inputData,setInputData]=useState('');
  const dispatch=useDispatch();
  const list=useSelector((state)=>state.todoReducers.list);
    return (
        <>
          <div className='main-div'>
            <div className='child-div'>
            <figure>
                <figcaption>Add your todo here</figcaption>
            </figure>
            <div className='addItems'>
                <input type="text" placeholder='Add Item' value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
                <i className='fa fa-plus add-btn' onClick={()=>dispatch(addTodo(inputData),setInputData(''))}></i>
            </div>
            <div className="showItems">
              {
                list.map((ele)=>{
                  return (
                  <div className="eachItem" key={ele.id}>
                     <h3>{ele.newTodo}</h3>
                    <div className="todo-btn">
                    <i className='far fa-trash-alt add-btn' title="Delete Item" onClick={()=>dispatch(deleteTodo(ele.id))}></i>
                    </div>
                  </div>
                  )
                })
              }
            </div>
            <div className="showItems">
                 <button className="btn effect04" data-sm-link-text="remove All"
                 onClick={()=>dispatch(clearTodo())}
                 ><span>Check List</span></button>
            </div>
            </div>
          </div>
        </>
    )
}

export default Todo;