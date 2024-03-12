import React from "react";
import GoBack from "../GoBack";

const UseEffect = () => {
  const [isValue, setIsValue] = React.useState(0);
  const [isUp, setNextUp] = React.useState(false);

  const handleUpCounter=()=>{
    setNextUp(!isUp);
  }

  React.useEffect(()=>{
    setIsValue((isValue)+1)
    console.log(isValue);
 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isUp])



  
    document.title = "Hooks - useEffect";  
    return (
      <div className="main-body">
        useEffect
        <p>Clicked {isValue} times.</p>
        <button onClick={handleUpCounter}>➕</button>
        <button onClick={()=>setIsValue(((isValue)>0)?isValue-1:0)}>➖</button>
        <button onClick={()=>setIsValue(((0)))}>🔁</button>
        <GoBack></GoBack>
      </div>
    );

};

export default UseEffect;
