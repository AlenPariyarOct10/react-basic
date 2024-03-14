import React, { useCallback } from "react";
import Child from "./Child";

const SubParent = ({data}) => {
    document.title = "SubParent - ContextAPI";

    return (
      <div className="main-body">
        <div>
          <b> SubParent  </b>
          <p>Name : {data?.name}</p>
          <Child data={data}/>
        </div>
      </div>
    );
};

export default SubParent;
