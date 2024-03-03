import React from "react";

const Array = () => {
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
        key: 1
    },
    {
        name: "filter",
        key: 2

    },
    {
        name: "reduce",
        key: 3

    },
    {
        name: "forEach",
        key: 4

    },
  ]
  document.title = "Array";
  console.log(arrObj?.[0]);


  return (
    <div>
      <div>
        <b> Array </b>
      </div>
      <div>{arrObj?.[0]?.name}</div>
      <div>{arr[1]}</div>
      <div>{arr.toString()}</div>
      <table border='1'>
        {arrMethod?.map((item)=>(
            <tr key={item?.key}>
                <td>
                    {item?.key}
                </td>
                <td>
                    {item?.name}
                </td>
            </tr>
        ))}
      </table>
    </div>
  );
};

export default Array;
