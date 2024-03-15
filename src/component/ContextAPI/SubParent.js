import React, { useCallback } from "react";
import Child from "./Child";

const SubParent = ({data}) => {
    document.title = "SubParent - ContextAPI";

    return (
      <div className="main-body">
        <div>
          <b> SubParent  </b>
          {
            data?.map((item)=>(
                <li>{item}</li>
            ))
          }
          
          <Child data={data}/>
        </div>
      </div>
    );
};

export default SubParent;
