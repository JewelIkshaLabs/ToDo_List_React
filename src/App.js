import logo from './logo.svg';
import './App.css';
import { Todos } from './components/Todos';
import { Form } from './components/Form.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/Actions';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer)
  const [editFormVisibility, setEditFormVisibility] = useState(false)
  const [editTodo, setEditTodo] = useState('')

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true)
    setEditTodo(todo)
  }

  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }
  return (
    <div className='wrapper'>
      <h1 className='text-center'>TODO-APP USING REACT AND REDUX</h1>
      <Form editFormVisibility = {editFormVisibility} editTodo = { editTodo } cancelUpdate= { cancelUpdate }/>
      <Todos handleEditClick = {handleEditClick} editFormVisibility = {editFormVisibility}/>
      {todos.length > 0 && (
        <button className='btn btn-danger btn-md delete-all' onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
