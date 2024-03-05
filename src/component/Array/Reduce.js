import React from "react";
import { NavLink } from "react-router-dom";
import GoBack from "../GoBack";

const Reduce = () => {
  const arr = ["Alen Pariyar", "Lamjung"];
  const arrObj = [
    {
        name: "Alen Pariyar",
        address: "Lamjung"
    },
    {
        name: "Ram",
        address: "Kathmandu"
    },
  ];

  document.title = "Array - Map";
  console.log(arrObj?.[0]);

  return (
    <div>
      This is Reduce
      <GoBack></GoBack>
    </div>
  );
};

export default Reduce;
