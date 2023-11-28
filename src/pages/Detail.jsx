import React from 'react'
import { useSelector } from 'react-redux'
import {  useNavigate, useParams } from 'react-router-dom'

const Detail = () => {
const params = useParams();
const data = useSelector((state)=> state.todos)
const navigate = useNavigate();


  return (
    <div>
      {data.filter((i)=> i.id === params)
       .map((i)=>{
        return(<>
        <label htmlFor="">제목</label>
            <div>{i.title}</div>
        <label htmlFor="">내용</label>
            <div>{i.content}</div>
                  <button onClick={() => {
        navigate("/")}}>home</button>
            </>
        )
    })}
    </div>
  )
}

export default Detail
