import React from "react";
import GoBack from "../GoBack";

import Highlighter from "../Highlighter";

const Filter = () => {
  const user = [
    {
      name: "Alen Pariyar",
      id:4,
      phone: 9816699413,
      address: "Lamjung"
    },
    {
      name: "Anurodh Aryal",
      id:7,
      phone: 9816698413,
      address: "Nuwakot"
    },
    {
      name: "Anjali Thapa",
      id:6,
      phone: 9816688413,
      address: "Bhaktapur"
    },
    {
      name: "Nirpesh Puri",
      id:27,
      phone: 9816611413,
      address: "Parbat"
    }
  ];

 

  const [isData, setIsData] = React.useState();
  
 
  let usr = isData?.filter((item)=>item?.id === 4);
  let usr1 = user?.filter((item)=>item?.name === "Alen Pariyar");
  let usr3 = user?.filter((item)=>item?.id > 5);
  
  // console.log(usr);
  document.title = "Array - Filter";

  const handleDelete = (id)=>{
    const deleteData = isData?.filter((item)=>item?.id !== id);
    setIsData(deleteData);
  }

  React.useEffect(()=>{
    setIsData(user)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="main-body">
      Filter
      <Highlighter code="const marks = [30,100,400,35,60,70];"></Highlighter>
      {
        isData?.map((item)=>(
          <div>
          <div key={item?.id}>
            {item?.name}
          </div>
          <button onClick={()=>handleDelete(item?.id)}>
            Delete
          </button>
          </div>
        ))
      }
      <GoBack></GoBack>
    </div>
  );
};

export default Filter;
