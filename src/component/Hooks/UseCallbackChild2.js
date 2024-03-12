import React from "react";

const UseCallbackChild2 = ({downcountUpdate}) => {
    const handleUp = ()=>{
        downcountUpdate();
    }
      document.title = "Hooks - useCallback";  
      return (
        <div className="main-body">
          <button onClick={handleUp}>Child Down</button>
          
        </div>
      );
  
  };

export default UseCallbackChild2;
