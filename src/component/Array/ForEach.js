import React from "react";
import GoBack from "../GoBack";

const ForEach = () => {
  document.title = "Array - forEach";
  const arr = [15, 16, 18, 22, 20, 25];
  let newArr = [];

  let complexData = [
    {
      value: 'val1',
      id: 12
    },{
      value: "hello",
      id: 20
    }
  ]

let convertedData = [];

complexData.forEach((item)=>{
  convertedData[item.id] = item.value;
})

console.log("converted : ",convertedData);

  arr.forEach((item) => {
    const afterAdd = item + 5;
    newArr.push(afterAdd);
  });

  console.log("arr : ", newArr);

  return (
    <div>
      This is <b>ForEach</b>
      <p>Iterates all the elements of the given array.</p>
      <iframe title="code"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=14px&ph=9px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520arr%2520%253D%2520%255B15%252C16%252C18%252C22%252C20%252C25%255D%253B%250A%250A%2520%2520let%2520newArr%2520%253D%2520%255B%255D%253B%250A%250A%2520%2520arr.forEach%28%28item%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520afterAdd%2520%253D%2520item%252B5%253B%250A%2520%2520%2520%2520newArr.push%28afterAdd%29%253B%250A%2520%2520%257D%29"
        height="300px"
        width="100%"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <br />
      newArray : {newArr.join(", ")}
      <br />
      <GoBack></GoBack>
    </div>
  );
};

export default ForEach;
