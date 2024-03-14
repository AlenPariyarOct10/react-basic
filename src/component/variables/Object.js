import React from "react";
import { useAppContext } from "../ContextAPI/ContextAPI";

const Object = () => {
  const obj = {
    name: "Alen Pariyar",
    address: "Lamjung",
    college: "Ratna Rajyalaxmi Campus",
    phone: 9816699413,
  };

  const {appState} = useAppContext();

  
  document.title = "Object";
  return (
    <div className="main-body">
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
      <hr />
      <div>
        <hr />
        <p>Data from contextAPI </p>
        {appState.data[0].name}
      </div>
    </div>
  );
};

export default Object;
