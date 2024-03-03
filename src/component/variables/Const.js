import React from "react";

const Const = () => {
  const name = "Alen Pariyar";

  const handleVar = () => {
    const name = "Alen";
    console.log(name);
  };

  return (
    <>
      <div onClick={handleVar}>Const</div>
      <div>{name}</div>
    </>
    
  );
};

export default Const;

