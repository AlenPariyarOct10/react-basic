import React from "react";
import { NavLink } from "react-router-dom";
import GoBack from "../GoBack";

const ForEach = () => {
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
      This is ForEach
      <p>Iterates all the elements of the given array.</p>
      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false"
  
  sandbox="allow-scripts allow-same-origin">
</iframe>
<br />
      
      <GoBack></GoBack>
    </div>
  );
};

export default ForEach;
