import React, { useCallback } from "react";
import SubChild from "./SubChild";

const Child = ({data}) => {
    document.title = "Child - ContextAPI";

    return (
      <div className="main-body">
        <div>
          <b> Child  </b>
          {
            data?.map((item)=>(
                <li>{item}</li>
            ))
          }
          <SubChild data={data}/>
        </div>
      </div>
    );
};

export default Child;
