import React from "react";
import GoBack from "../GoBack";

const UseEffect = () => {
  const [isValue, setIsValue] = React.useState(0);
  React.useEffect(()=>{
    console.log(isValue);
  },[isValue])

  
    document.title = "Hooks - useEffect";  
    return (
      <div className="main-body">
        useEffect
        <p>Clicked {isValue} times.</p>
        <button onClick={()=>setIsValue((isValue)+1)}>➕</button>
        <button onClick={()=>setIsValue(((isValue)>0)?isValue-1:0)}>➖</button>
        <button onClick={()=>setIsValue(((0)))}>🔁</button>
        <GoBack></GoBack>
      </div>
    );

};

export default UseEffect;
