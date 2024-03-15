import React, { useCallback } from "react";
import SubParent from "./SubParent";
import { useAppContext } from "./ContextAPI";

const Parent = () => {
    document.title = "Parent - ContextAPI";

    const {appState, updateState} = useAppContext(); 
    console.log("appState",appState);
    const data = ["Samsung","ASUS","Apple","Oppo","Redmi","Vivo","Nokia","HP","Dell","Lenovo"];

    React.useEffect(()=>{
        updateState({...appState, data:data});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
      <div className="main-body">
        <div>
          <b> Parent  </b>
          <SubParent data={data}/>
        </div>
      </div>
    );
};

export default Parent;
