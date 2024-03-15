import React, { useCallback } from "react";
import { useAppContext } from "./ContextAPI";

const SubChild = ({data}) => {
    document.title = "SubChild - ContextAPI";
    const {appState} = useAppContext();
    console.log(appState);
    return (
      <div className="main-body">
        <div>
          <b> SubChild  </b>
          <p>Name : {data?.name}</p>

          <b>Data from context api</b>
          {
            
            data?.map((item)=>(
                <li key={item}>{item}</li>
            ))
          }
        </div>
      </div>
    );
};

export default SubChild;
