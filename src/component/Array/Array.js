import React from "react";
import { useNavigate } from "react-router-dom";


const Array = () => {
  const navigate = useNavigate();
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
  const arrMethod = [
    {
        name: "map",
        key: 1,
        path: "map"
    },
    {
        name: "filter",
        key: 2,
        path: "filter"

    },
    {
        name: "reduce",
        key: 3,
        path: "reduce"


    },
    {
        name: "forEach",
        key: 4,
        path: "forEach"
    },
  ]
  document.title = "Array";

  const redirect = (path)=>{
    navigate(path);
  }
  

  return (
    <div className="main-body">
      <div>
        <b> Array </b>
      </div>
      <div>{arrObj?.[0]?.name}</div>
      <div>{arr[1]}</div>
      <div>{arr.toString()}</div>
      <table border='1'>
        <tbody>
        {arrMethod?.map((item)=>(
            <tr className="arrayMethods" key={item?.key}>
                <td>
                  {item?.key}
                </td>
                <td>
                   <span onClick={()=>redirect(item.path)} >{item.name}</span>
                </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Array;
