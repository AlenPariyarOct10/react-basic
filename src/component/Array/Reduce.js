import React from "react";
import GoBack from "../GoBack";
import Highlighter from "../Highlighter";

const Reduce = () => {
  document.title = "Array - Reduce";
  const arr = [18,22,20,100,200,12];

  const sum = "console.log(sum);->"+arr.reduce((accum, current)=>accum+current,0);
  console.log(sum);

  return (
    <div>
      This is Reduce

      <Highlighter code="
        const arr = [18,22,20,100,200,12];
      "></Highlighter>
      <Highlighter code="
         const sum = arr.reduce((accum, current)=>accum+current,0);
      "></Highlighter>
      <Highlighter code={sum}></Highlighter>
      <br />
      <GoBack></GoBack>
    </div>
  );
};

export default Reduce;
