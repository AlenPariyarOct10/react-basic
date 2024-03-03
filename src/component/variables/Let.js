import React from 'react'


const Let = () =>{
    let name = "Alen";
    name = "Alen Pariyar";

    const handleVar = ()=>{
        name = "Alen";
    }

   
    return (<div>
        <div onClick={handleVar}>
            Let
        </div>
        <div>
            {name}
        </div>

    </div>)
}

export default Let