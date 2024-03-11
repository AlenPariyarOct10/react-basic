import React, { useCallback } from "react";
import GoBack from "../GoBack";
import { useNavigate } from "react-router-dom";

const UseEffect = () => {

    document.title = "Hooks - useEffect";  
    return (
      <div className="main-body">
        useEffect
        <GoBack></GoBack>
      </div>
    );

};

export default UseEffect;
