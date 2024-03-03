import React from "react";

const Object = () => {
  const obj = {
    name: "Alen Pariyar",
    address: "Lamjung",
    college: "Ratna Rajyalaxmi Campus",
    phone: 9816699413,
  };
  
  document.title = "Object";
  return (
    <div>
      <div>
        <b> Object </b>
      </div>
      <div>Name : {obj.name}</div>
      <div>Address : {obj.address}</div>
      <div>College : {obj.college}</div>
      <div>Phone : {obj.phone}</div>
      <div>
        {delete obj.phone}
        {obj.name = "Alen"}
        <br />
        {JSON.stringify(obj)}
      </div>
    </div>
  );
};

export default Object;
