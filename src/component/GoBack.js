import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = ()=>{
    const navigate = useNavigate();
    const redirect = ()=>{
        navigate(-1);
      }

      return (
        <button onClick={()=>redirect()}>Go Back</button>
      );

      
}

export default GoBack;