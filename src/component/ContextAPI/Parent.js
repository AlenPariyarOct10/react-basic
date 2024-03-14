import React, { useCallback } from "react";
import SubParent from "./SubParent";

const Parent = () => {
    document.title = "Parent - ContextAPI";

    const data = {
        name:"Parent",
        id:1
    }

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
