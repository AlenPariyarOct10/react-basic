import React, { useCallback } from "react";

const SubChild = ({data}) => {
    document.title = "SubChild - ContextAPI";

    return (
      <div className="main-body">
        <div>
          <b> SubChild  </b>
          <p>Name : {data?.name}</p>
        </div>
      </div>
    );
};

export default SubChild;
