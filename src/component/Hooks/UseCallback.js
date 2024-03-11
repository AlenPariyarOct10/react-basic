import React, { useCallback } from "react";
import GoBack from "../GoBack";
import { useNavigate } from "react-router-dom";

const UseCallback = () => {

    document.title = "Hooks - useCallback";  
    return (
      <div className="main-body">
        UseCallback
        <GoBack></GoBack>
      </div>
    );

};

export default UseCallback;
