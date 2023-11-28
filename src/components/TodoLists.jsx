import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, switchTodo } from '../redux/modules/todos';
import {Link, useNavigate } from 'react-router-dom';

const TodoLists = ({isActive}) => {
   const data = useSelector((state)=> state.todos);
   const navigate = useNavigate();

const dispatch = useDispatch();

const deletHandler = (e) =>{
    dispatch(deleteTodo(e))
}
const switchHandler = (e) =>{
    dispatch(switchTodo(e))
}

console.log('todo', data);
  return (
    <div>
        <h1>{isActive ? " 하는 중" : "끝낸 일"}</h1>
        {data.filter((i)=> i.isDone === !isActive)
        .map((i)=>{
            return(<>
            <label htmlFor="">제목</label>
                <div>{i.title}</div>
            <label htmlFor="">내용</label>
           <Link to="/:id"> <div >{i.content}</div> </Link>  
                <button onClick={()=>switchHandler(i.id)}>{i.isDone ? '수정' : '완료'}</button>
                <button onClick={()=>deletHandler(i.id)}>삭제</button>
         
                </>
            )
        })}

    </div>
  )
}

export default TodoLists