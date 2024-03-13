import React from "react";
import GoBack from "../GoBack";
import Highlighter from "../Highlighter";

const Reduce = () => {
  document.title = "Array - Reduce";
  const arr = [18,22,20,100,200,12];

  const data = [
    {
      price : 20000,
      id: 1,
      name: "Samsung a10"
    },
    {
      price : 25000,
      id: 2,
      name: "Samsung a20"
    },
    {
      price : 40000,
      id: 3,
      name: "One Plus"
    },
    {
      price : 50000,
      id: 4,
      name: "Redmi"
    },
    {
      price : 65000,
      id: 5,
      name: "Realme"
    },
    {
      price : 12000,
      id: 6,
      name: "Samsung Galaxy 5"
    },
  ]

  const totalPrice = data.reduce((pre, curr)=> pre+curr.price,0);
  const mostExpensive = data.reduce((pre,curr)=> (pre>curr.price)?pre:curr.price,data[0]);
  const mostCheap = data.reduce((pre,curr)=> (pre<curr.price)?pre:curr.price,data[0]);
console.log("exp",mostExpensive);
console.log("cheap",mostCheap);




  const highest = arr.reduce((greater, current)=> (greater<current)?current:greater,arr[0]);
  console.log("high",highest);
  const min = arr.reduce((greater, current)=> (greater>current)?current:greater,arr[0]);
  console.log("min",min);
  const sum = "console.log(sum);->"+arr.reduce((accum, current)=>accum+current,0);
  console.log(sum);

  return (
    <div className="main-body">
      This is Reduce

      <Highlighter code="
        const arr = [18,22,20,100,200,12];
      "></Highlighter>
      <Highlighter code="
         const sum = arr.reduce((accum, current)=>accum+current,0);
      "></Highlighter>
      <Highlighter code={sum}></Highlighter>
     
        
      min = {min}
      <br />
      max = {highest}
      <br />

      
      

      price = {totalPrice}
      <GoBack></GoBack>
    </div>
  );
};

export default Reduce;
