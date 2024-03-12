import React from "react";



const UseCallbackChild = ({setNextCount, upcount}) => {
  const handleUp = ()=>{
    setNextCount(upcount+1);
  }
    document.title = "Hooks - useCallback";  
    return (
      <div className="main-body">
        UseCallback - Child <br/>
        
        <button onClick={handleUp}>Child Up</button>
        
      </div>
    );

};

export default UseCallbackChild;
