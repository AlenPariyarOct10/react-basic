import React, { useCallback } from "react";
import GoBack from "../GoBack";
import { useNavigate } from "react-router-dom";

const UseState = () => {

    document.title = "Hooks - useEffect";  
    return (
      <div className="main-body">
        useState
        <GoBack></GoBack>
      </div>
    );

};

export default UseState;
