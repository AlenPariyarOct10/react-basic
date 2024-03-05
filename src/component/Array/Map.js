import React from "react";
import Highlighter from "../Highlighter";
import GoBack from "../GoBack";

const Map = () => {
  const arr = ["Alen Pariyar", "Lamjung"];
  const x = [10,20,30,40,50];

  document.title = "Array - Map";
  console.log(x?.[0]);

  return (
    <div>
      Using <b>map</b>
      <Highlighter className="code" code="
      let x = [10,20,30,40,50];"></Highlighter>
      <Highlighter className="code" code="
      x.map((x)=>(console.log(x)))"></Highlighter>
      {
        x.map((item)=>(
          <div key={item}>{item}</div>
        ))
      }
      <GoBack></GoBack>
    </div>
  );
};

export default Map;
