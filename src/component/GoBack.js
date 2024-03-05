import React from "react";
import {useNavigate } from "react-router-dom";


const GoBack = () => {
  const navigate = useNavigate();

  const redirect = (path)=>{
    navigate(path);
  }

  return (
    <button onClick={redirect("/array")}>Go Back</button>
    
  );

};

export default GoBack;
