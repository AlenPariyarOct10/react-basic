import React from "react";

import Highlighter from "../Highlighter";

const Filter = () => {
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
      Filter
      <Highlighter code=""></Highlighter>
    </div>
  );
};

export default Filter;
