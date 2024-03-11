import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(-1);
  };

  return (
    <div>
      <br />
      <button className="backBtn" onClick={() => redirect()}> ↩ Go Back</button>
    </div>
  );
};

export default GoBack;
