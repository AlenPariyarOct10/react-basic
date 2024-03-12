import React, { useCallback } from "react";
import UseCallbackChild from "./UseCallbackChild";
import UseCallbackChild2 from "./UseCallbackChild2";
import GoBack from "../GoBack";


const UseCallback = () => {
  const [upcount, setNextCount] = React.useState(0);
  const downcountUpdate = React.useCallback(()=>{
    setNextCount(upcount-1);
  },[upcount])
    document.title = "Hooks - useCallback";  
    return (
      <div className="main-body">
        {upcount}
        <UseCallbackChild setNextCount={(e)=>{setNextCount(e)}} upcount={upcount}></UseCallbackChild>
        <UseCallbackChild2 downcountUpdate={(e)=>{downcountUpdate(e)}}></UseCallbackChild2>
        <GoBack></GoBack>
      </div>
    );
};

export default UseCallback;
