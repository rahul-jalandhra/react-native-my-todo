import React from 'react'
import Home from '../../components/Home'
import { useDispatch, useSelector } from 'react-redux'
import { modalVisibleAction, todoAddAction } from '../../store/reducers';

function HomeScreen() {
  const dispatch=useDispatch();
  const state=useSelector((val)=>val.todoData);

  console.log(state);

  const addNewTodo=()=>{
    dispatch(modalVisibleAction(true))
  }

  const onClose=()=>{
    dispatch(modalVisibleAction(false))
  }
  return (
    <Home todoList={state?.todoList||[]} addNewTodo={addNewTodo} isVisible={state.isVisible} onClose={onClose}/>
  )
}

export default HomeScreen;