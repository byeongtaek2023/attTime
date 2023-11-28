import React from "react";
import InputF from '../components/InputF';
import TodoLists from '../components/TodoLists';

const Home = () => {
  return <div> 아
    <InputF/>
   
    <TodoLists isActive={true}/>
    <TodoLists isActive={false}/>
  </div>;
};

export default Home;
