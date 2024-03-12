import React from "react";
import { useNavigate } from "react-router-dom";
import WithCounter from "./WithCounter";
import Counter from "./Counter";

const Hoc = () => {
    const Count = WithCounter(Counter);
    document.title = "Hoc";
    return (
      <div className="main-body">
        <Count/>
      </div>
    );

};

export default Hoc;
