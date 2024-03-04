import React from "react";
import { NavLink } from "react-router-dom";

const Map = () => {
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
      This is map
    </div>
  );
};

export default Map;
