// import uuid from "react-uuid";
import shortid from "shortid";
const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";
const SWITCH_TODO = "todo/SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    content: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((i) => i.id !== action.payload); //TODO: 여기 작성

    case SWITCH_TODO:
      return state.map((i) => {
        if (i.id === action.payload) {
          return { ...i, isDone: !i.isDone };
        } else {
          return i;
        }
      }); // state의 값  id랑 디스패치값 비교해서 같으면 일단 킵

    default:
      return state;
  }
};

export default todos;
