import React, { useReducer } from "react";

const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  };

export default function UseReducerDemo2() {
    const [count, dispatch] =useReducer(counterReducer, 0)
  return (
    <>
      <div>UseReducerDemo2</div>
      <h2 className="text-center">Counter Example using useReducer Hook</h2>

      <h3 className="text-center">
        Counter: {count}
        <br />
        <button onClick={()=> {dispatch({type: 'INCREMENT'})}}>Increment</button>
        <button onClick={()=> {dispatch({type: 'DECREMENT'})}} className="m-2">Decrement</button>
        <button onClick={()=> {dispatch({type: 'RESET'})}}>Reset</button>
      </h3>

    </>
  );
}
