import React from "react";
import GoBack from "../GoBack";

const Counter = ({count, setCount}) => {

    document.title = "HOC - Counter";  
    console.log(count);
    return (
      <div className="main-body">
        {count}
        <button onClick={setCount}>Up Count</button>
        <GoBack></GoBack>
      </div>
    );
};

export default Counter;
