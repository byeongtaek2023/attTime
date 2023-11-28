import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import shortid from "shortid";
import { addTodo } from '../redux/modules/todos';

const InputF = () => {
    const [title, setTitle] = useState('');
    const [content,setContent]= useState('');
    const dispatch = useDispatch() 
  


    const titleHandler = (e) => {
        setTitle(e.target.value)
    };
    const contentHandler = (e) => {
        setContent(e.target.value)
    };
    const btnHandler =( ) => {
        const newTodo  = {
            id: shortid.generate(),
            title: title,
            content: content,
            isDone: false,
          }
          dispatch( addTodo(newTodo));
          setContent('');
          setTitle('');
    }
    

  return (

    <div>
        <label htmlFor=""> 제목 </label>
        <input value={title} onChange={titleHandler}></input>
        <label htmlFor=""> 내용 </label>
        <input value={content} onChange={contentHandler}></input>
        <button onClick={btnHandler}>제출</button>
    </div>
  )
}

export default InputF