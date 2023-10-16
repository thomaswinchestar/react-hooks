import React, { useReducer, useRef } from "react";
import "flowbite";

//dispatch({type:'PLUS'})
const countReducer = (preState, action) => {
  //change state
  switch (action.type) {
    case "PLUS":
      return {
        count: preState.count + 1,
        isOdd: preState.count % 2 ? false : true, //0,1
      };
      break;
    case "MINUS":
      return {
        count: preState.count - 1,
        isOdd: preState.count % 2 ? false : true, //0,1
      };
      break;
  }
};
const App = () => {
  const btnRef = useRef(null); //got dom api of btn tag
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
    isOdd: false,
  });
  return (
    <>
      <h1 className="text-center text-6xl text-grey-500 my-5 font-semibold">
        React Hooks useRef and useReducer Examples
      </h1>
      <div className="flex align-center justify-center">
        <button
          type="button"
          className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          ref={btnRef}
          onClick={() =>
            (btnRef.current.className =
              "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2")
          }
        >
          Purple to Blue
        </button>
      </div>

      <h1 className="text-center text-6xl text-grey-500 my-5 font-semibold">
        {state.count}
      </h1>
      <p className="text-center text-xl text-grey-500 my-5 font-semibold">
        {state.isOdd ? "Odd Number" : "Even Number"}
      </p>
      <div className="flex align-center justify-center mt-5">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-2 "
          onClick={() => dispatch({ type: "PLUS" })}
        >
          +
        </button>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-2"
          onClick={() => dispatch({ type: "MINUS" })}
        >
          -
        </button>
      </div>
    </>
  );
};

export default App;
